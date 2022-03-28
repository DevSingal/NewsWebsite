import { Fragment } from "react";
import NavigationBar from "./components/NavigationBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
   return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
