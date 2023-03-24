import "./App.css";
import Footer from "./components/footer";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login";
import Create from "./pages/crud/crud";
// import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider, { UserContext } from "./contexts/UserContext"
import { useContext, useEffect } from "react";

function UserDetails(){
  const {user} = useContext(UserContext)
  return(
    <>
    <p>User Name: </p>
    <p>User Email: </p>
    </>
  )
}

function AnotherComponent(){
  const {user, setUser} = useContext(UserContext)
  useEffect(()=>{
    setUser({
      name: "John Doe",
      email: "upchh@example.com"
    })
  })
  return(
    <>
    <p>Some Other Component</p>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <UserDetails />
        <AnotherComponent/>
      </UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="create" element={<Create/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;