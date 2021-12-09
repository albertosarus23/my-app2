import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Create from './Create';
import Storage from "./Storage";
import PatientList from "./PatientList";
import PatientDetails from "./PatientDetails";
import PatientQueue from "./PatientQueue";
import LoginForm from "./LoginForm";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className ='content'>
          <Switch>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/storage">
              <Storage />
            </Route>
            <Route path="/queue">
              <PatientQueue />
            </Route>
            <Route path ="/bloglist">
              <Storage />
            </Route>
            <Route path ="/create">
              <Create />
            </Route>
            <Route path ="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
            <Route path="/patientlist">
              <PatientList />
            </Route>
            <Route path="/">
              <LoginForm />
            </Route>
            <Route path="/patient/:id">
              <PatientDetails id = {1} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
