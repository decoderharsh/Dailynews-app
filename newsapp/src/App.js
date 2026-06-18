import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoadingBar from "react-top-loading-bar";
 

export default class App extends Component {
    pageSize = 15;
    state = {
      progress :0
    }
    setProgress=(progress)=>{
        this.setState({progress: progress})
    }
  render() {
    return (
      <div>         
  <BrowserRouter>
   <Navbar/>
    <LoadingBar
        color="#f11946"
        height={3}
        progress={this.state.progress}
        
      />
    <Routes>
      <Route exact path="/" element={<News setProgress ={this.setProgress}   key="/" pageSize={this.pageSize} locale="in"/>} />
      <Route exact path="/general" element={<News setProgress ={this.setProgress}   key="general" pageSize={this.pageSize} locale="in" category="general"/>} />
      <Route exact path="/business"  element={<News setProgress ={this.setProgress}  key="business" pageSize={this.pageSize} locale="in" category="business"/>} />
      <Route exact path="/entertainment" element={<News setProgress ={this.setProgress}  key="entertainment" pageSize={this.pageSize} locale="in" category="entertainment"/>} />
      <Route exact path="/health"  element={<News setProgress ={this.setProgress}  key="health" pageSize={this.pageSize} locale="in" category="health"/>} />
      <Route exact path="/science"  element={<News setProgress ={this.setProgress}  key="science" pageSize={this.pageSize} locale="in" category="science"/>} />
      <Route exact path="/sports"  element={<News setProgress ={this.setProgress}  key="sports" pageSize={this.pageSize} locale="in" category="sports"/>} />
      <Route exact path="/technology"  element={<News setProgress ={this.setProgress}  key="technology" pageSize={this.pageSize} locale="in" category="technology"/>} />
  
    </Routes>
      
         </BrowserRouter>,

      </div>
    )
  }
}
