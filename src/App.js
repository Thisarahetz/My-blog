import Home from './pages/Home';
import Article from './pages/Article';
import AriticleList from './pages/AriticleList';
import About from './pages/About';
import {BrowserRouter as Router,Route} from 'react-router-dom';

//component
import NavBar from './componet/NavBar'

function App() {
  return (
    <Router>
      <NavBar/>
        <div className='max-w-screen-md mx-auto pt-20'>
           <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />
           <Route exact path='/articles-list' component={Article} />
           <Route exact path='/article' component={AriticleList} />
        </div>
    </Router>
    
  );
}

export default App;