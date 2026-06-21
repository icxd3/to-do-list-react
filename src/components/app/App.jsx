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
        { name: 'John', salary: 900, id: 1 },
        { name: 'Alex', salary: 250, id: 2 },
        { name: 'Anna', salary: 1500, id: 3 },
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

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo />

        <div className="search">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployersList
          data={data}
          onDelete={this.deleteItem} />
        <EmployersAddForm />
      </div>
    )
  }
}

export default App
