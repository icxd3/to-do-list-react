import './App.css'
import AppInfo from '../app-info/app-info.jsx'
import SearchPanel from '../search-panel/search-panel.jsx'
import AppFilter from '../app-filter/app-filter.jsx'
import EmployersList from '../employers-list/employers-list.jsx'

function App() {

  return (
    <div className="app">
      <AppInfo />

      <div className="search"> 
        <SearchPanel />
        <AppFilter /> 
      </div>

      <EmployersList />
    </div>
  )
}

export default App
