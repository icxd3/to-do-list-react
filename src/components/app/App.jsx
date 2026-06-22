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
      ]
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

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo employees={data.length} bonus={data.filter(item => item.increase).length} />

        <div className="search">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployersList
          data={data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise} />
        <EmployersAddForm onAddItem={this.addItem} />
      </div>
    )
  }
}

export default App
