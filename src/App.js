import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from './components/SearchPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CompanyDetail from './components/CompanyDetail';
import {useState} from 'react'

function App() {

  const [companyName, setCompanyName] = useState()
    return ( 
      <Router>
      <div className='mt-5'>
      <Route path='/' exact render={() => <SearchPage setCompanyName={setCompanyName}/>}></Route>
      </div>
      <Route path='/company-detail' exact render={() => <CompanyDetail companyName={companyName}/>}></Route>
      </Router>
    );
}

export default App;