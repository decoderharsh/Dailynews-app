import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from  'prop-types'




export class News extends Component {
  static defaultProps={
    pageSize : 5,
    locale : "in",
    category : "general"
  }
  static propTypes = {
    pageSize: PropTypes.number,
    locale: PropTypes.string,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading : false ,
      page : 1,
     totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-DailyNews`;
  }
  async updateNews(){
    this.props.setProgress(10);
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=e1D2Drwk2AgviWKZAXUiiE2390Al2ppqAS9IFKjY&locale=${this.props.locale}&categories=${this.props.category}&page=${this.state.page}&limit=${this.props.pageSize}`;
   this.setState({loading : true});
    let Data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await Data.json();
    console.log(parsedData)
    this.props.setProgress(70);
    this.setState({articles : parsedData.data , totalResults: parsedData.meta.found, loading : false})
     this.props.setProgress(100);
  }
 
   async componentDidMount(){

    this.updateNews();

  }
 

  handlePrevClick = async ()=>{
   this.setState({
      page : this.state.page -1
  });
  this.updateNews();
}
  handleNextClick = async ()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

    this.setState({
      page : this.state.page +1
  });
  this.updateNews();
  }
  }
  render() {
    return (
      <div>
          <div className='container'>
 
          <h2 className="text-center" style ={{margin:'30px 0px'}}>DailyNews - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          
          
          <div className="row">
            {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
              return  <div className='col-md-4' key={element.url}>
              <NewsItem title = {element.title?element.title.slice(0,68):""} description = {element.description?element.description.slice(0,120):""} imageUrl = {element.image_url} newsUrl={element.url}  date={element.published_at} source={element.source}/>
            </div>
            })}
            </div>
            </div>
          
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous</button>
            <button type="button"  disabled={this.state.page >=Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
           
          
          
          </div>
       
      
        
    )
  }
}

export default News