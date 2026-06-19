import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoadingBar from "react-top-loading-bar";
 

const App=()=>{
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  const pageSize = 15;
   
  
    return (
      <div>         
  <BrowserRouter>
   <Navbar  mode={mode} toggleMode={toggleMode}/>
    <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        
      />
    <Routes>
      <Route exact path="/" element={<News setProgress ={setProgress}   key="/" pageSize={pageSize} locale="in"/>} />
      <Route exact path="/general" element={<News setProgress ={setProgress}   key="general" pageSize={pageSize} locale="in" category="general"/>} />
      <Route exact path="/business"  element={<News setProgress ={setProgress}  key="business" pageSize={pageSize} locale="in" category="business"/>} />
      <Route exact path="/entertainment" element={<News setProgress ={setProgress}  key="entertainment" pageSize={pageSize} locale="in" category="entertainment"/>} />
      <Route exact path="/health"  element={<News setProgress ={setProgress}  key="health" pageSize={pageSize} locale="in" category="health"/>} />
      <Route exact path="/science"  element={<News setProgress ={setProgress}  key="science" pageSize={pageSize} locale="in" category="science"/>} />
      <Route exact path="/sports"  element={<News setProgress ={setProgress}  key="sports" pageSize={pageSize} locale="in" category="sports"/>} />
      <Route exact path="/technology"  element={<News setProgress ={setProgress}  key="technology" pageSize={pageSize} locale="in" category="technology"/>} />
  
    </Routes>
      
         </BrowserRouter>

      </div>
    )
  }
  export default App;

