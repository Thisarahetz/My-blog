import Home from './pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        <div className='max-w-screen-md mx-auto pt-20'>
           <Route exact path='/' component={Home} />
        </div>
    </Router>
    
  );
}

export default App;
