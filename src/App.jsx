
import './App.css'
import Signup from './Components/Signup'
import Courses from './Courses/Courses'
import Home from './Home/Home'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'


function App() {
 

  return (
    <>
    <div className='dark:bg-slate-900  dark:text-white'>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </Router>
   </div>
    </>
  )
}

export default App
