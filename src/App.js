import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Container1 from "./components/Containers/Container1/Container1";
import Container2 from "./components/Containers/Container2/Container2";
import Container3 from "./components/Containers/Container3/Container3";
import Container4 from "./components/Containers/Container4/Container4";
import Footer from "./components/Footer/Footer";
import Blog from "./components/NewBlog/Blog";
import Blogs from "./components/BlogsPage/Blogs";
import Singleblog from './components/SingleBlog/Singleblog';
import EditBlog from './components/EditBlog/EditBlog';
import DeleteBlog from './components/DeleteBlog/DeleteBlog';
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(17 6 94)';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  const setAlarm =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
  return (
    <Router>
        <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert}/>
        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/" element={<>
                                         <Container1 mode={mode} />
                                         <Container2 mode={mode} />
                                         <Container3 />
                                         <Container4 mode={mode} />
                                         <Footer />
                                         </>}/>
          <Route exact path="/apnablog" element={<>
                                         <Container1 mode={mode} />
                                         <Container2 mode={mode} />
                                         <Container3 />
                                         <Container4 mode={mode} />
                                         <Footer />
                                         </>}/>
          
          <Route exact path="/newblog" element={<Blog/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/show-blog/:id" element={<Singleblog/>}/>
          <Route exact path="/show-blog/:id/edit_blog" element={<EditBlog/>}/>
          <Route exact path="/show-blog/:id/delete_blog" element={<DeleteBlog setAlarm={setAlarm}/>}/>
        </Routes>
      </Router>
  ); 
}

export default App;


