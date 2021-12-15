import Navbar from '../Home/Navbar';
import Home from '../Home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BlogDetails from "../Blogs/BlogDetails";
import NotFound from "../NotFound";
import Create from '../Blogs/Create';
import Storage from "../Storage/Storage";
import PatientList from "../Patient/PatientList";
import PatientDetails from "../Patient/PatientDetails";
import PatientQueue from "../Patient/PatientQueue";
import LoginForm from "../Login/LoginForm";
import PatientHome from "../Home/PatientHome";

function Patient() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className ='content'>
          <Switch>
            <Route exact path="/">
              <PatientHome />
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
            <Route path="/patient/:id">
              <PatientDetails id = {1} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Patient;
