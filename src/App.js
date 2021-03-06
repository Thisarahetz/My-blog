import Home from './pages/Home';
import Article from './pages/Article';
import AriticleList from './pages/AriticleList';
import About from './pages/About';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//component
import NavBar from './componet/NavBar'
import NotFound from './pages/NotFound';

function App() {
  return (
    
    <Router>
     
      <NavBar/>
        <div className='max-w-screen-md mx-auto pt-20'>
        <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />
           <Route exact path='/articles-list' component={AriticleList} />
           <Route exact path='/article/:name' component={Article} />
           <Route component={NotFound} />
        </Switch>
        </div>
        
    </Router>
    
    
  );
}

export default App;