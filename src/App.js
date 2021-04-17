import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import firebase from "firebase/app";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signin from "./Components/Login/Signin";
import { createContext, useEffect, useState } from "react";
import BookService from "./AdminPanel/UserSide/BookService";
import BookingList from "./AdminPanel/UserSide/BookingList";
import Dashboard from "./AdminPanel/Dashboard";
import GiveReview from "./AdminPanel/UserSide/GiveReview";
import AddService from "./AdminPanel/AdminSide/AddService";
import MakeAdmin from "./AdminPanel/AdminSide/MakeAdmin";
import ManageService from "./AdminPanel/AdminSide/ManageService";
import OrderList from "./AdminPanel/AdminSide/OrderList";
import EditService from "./AdminPanel/AdminSide/EditService";
import AdminList from "./AdminPanel/AdminSide/AdminList";
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const { displayName, email, photoURL } = user;
        let userDetails = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(userDetails);
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>{" "}
          <Route path="/signup">
            <Signin />
          </Route>
          <Route path="/dashboard/all-bookings">
            <BookingList />
          </Route>{" "}
          <Route path="/dashboard/book-service">
            <BookService />
          </Route>{" "}
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>{" "}
          <Route path="/dashboard/give-review">
            <GiveReview />
          </Route>
          <Route path="/dashboard/add-service">
            <AddService />
          </Route>
          <Route path="/dashboard/make-admin">
            <MakeAdmin />
          </Route>{" "}
          <Route path="/dashboard/manage-service">
            <ManageService />
          </Route>{" "}
          <Route path="/dashboard/orders-list">
            <OrderList />
          </Route>{" "}
          <Route path="/dashboard/edit-service">
            <EditService />
          </Route>
          <Route path="/dashboard/admin-list">
            <AdminList />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
