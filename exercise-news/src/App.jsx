import './App.css'
import Header from './components/Header/Header'
import Article from './components/Article/Article'
function App() {
 

  return (
    <div className='main-container'>
       <Header/>
       <div className='flex-container'>
       <Article/>
       </div>
     
    </div>
  )
}

export default App
