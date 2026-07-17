import './App.css'
import AppInfo from '../app-info/app-info.jsx'
import SearchPanel from '../search-panel/search-panel.jsx'
import AppFilter from '../app-filter/app-filter.jsx'
import EmployersList from '../employers-list/employers-list.jsx'
import EmployersAddForm from '../employers-add-form/employers-add-form.jsx'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John', salary: 900, increase: false, rise: true, id: 1 },
        { name: 'Alex', salary: 250, increase: true, rise: false, id: 2 },
        { name: 'Anna', salary: 1500, increase: false, rise: false, id: 3 },
      ],
      term: '',
      filter: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      console.log(index);
      return {
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item;
      })
    }))
  }

  onToggleRise = (id) => {
    console.log(`Rise this ${id}`);
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary: Number(salary),
      increase: false,
      rise: false,
      id: this.state.data.length > 0 ? Math.max(...this.state.data.map(item => item.id)) + 1 : 1
    }
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  filterData = () => {
    const { data, term, filter } = this.state
    const searchTerm = term.toLowerCase()

    return data.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm)

      if (!matchesSearch) {
        return false
      }

      switch (filter) {
        case 'increase':
          return item.increase
        case 'salary':
          return item.salary > 1000
        default:
          return true
      }
    })
  }

  render() {
    const { term, filter } = this.state;
    const visibleData = this.filterData();

    return (
      <div className="app">
        <AppInfo employees={visibleData.length} bonus={visibleData.filter(item => item.increase).length} />

        <div className="search">
          <SearchPanel term={term} onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise} />
        <EmployersAddForm onAddItem={this.addItem} />
      </div>
    )
  }
}

export default App
