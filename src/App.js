import { Link, Route, Switch } from 'react-router-dom';
import { EditUser } from './EditUser';
import { UserList } from './UserList';
import { UserRegistration } from './UserRegistration';
import { DeleteUser } from './DeleteUser';

function App() {
  return (
    <div>
      <div className="bg-light">
        <div className="container">
          <nav className="navbar bg-light navbar-expand-lg navbar-light justify-content-end">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Registration</Link>
              </li>
              <li className="navbar-item">
                <Link to="/UserList" className="nav-link">User List</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={UserRegistration}/>
        <Route path="/edit/:id" component={EditUser}/>
        <Route path="/UserList" component={UserList}/>
        <Route path="/delete/:id" component={DeleteUser}/>
      </Switch>
    </div>
  );
}

export default App;
