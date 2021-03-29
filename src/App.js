import './App.css';
import {Login} from './component/login'
import {UserInfo} from './component/user_information'
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/login' exact={true} component={Login}/>
          <Route path='/user' exact={true} component={UserInfo}/>  
        </Switch>
      </Router>
  );
}

export default App;
