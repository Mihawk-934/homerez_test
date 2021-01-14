import Home from './containers/Home/Home';
import Liked from './containers/Liked/Liked';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/Home" exact component={Home}/>
      <Route path="/Liked" exact component={Liked}/>
      <Redirect to='/Home'/>
    </Switch>   
  );
}

export default App;
