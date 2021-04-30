import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import firebase from "firebase/app";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import BlogPage from "./Components/BlogComponent/BlogPage";
import Services from "./Components/Services/Services";
import ServicePage from "./Pages/ServicePage";
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
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:postId">
            <BlogPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>{" "}
          <Route path="/signup">
            <Signin />
          </Route>
          <Route path="/all-services">
            <ServicePage />
          </Route>
          <PrivateRoute path="/dashboard/all-bookings">
            <BookingList />
          </PrivateRoute>{" "}
          <PrivateRoute path="/dashboard/book-service">
            <BookService />
          </PrivateRoute>{" "}
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>{" "}
          <PrivateRoute path="/dashboard/give-review">
            <GiveReview />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/add-service">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/make-admin">
            <MakeAdmin />
          </PrivateRoute>{" "}
          <PrivateRoute path="/dashboard/manage-service">
            <ManageService />
          </PrivateRoute>{" "}
          <PrivateRoute path="/dashboard/orders-list">
            <OrderList />
          </PrivateRoute>{" "}
          <PrivateRoute path="/dashboard/edit-service">
            <EditService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin-list">
            <AdminList />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
