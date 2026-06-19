import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from  'prop-types'

 const News =(props)=> {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
 
  
  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
   document.title = `${capitalizeFirstLetter(props.category)}-DailyNews`;

  const updateNews= async ()=>{
    props.setProgress(10);
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=e1D2Drwk2AgviWKZAXUiiE2390Al2ppqAS9IFKjY&locale=${props.locale}&categories=${props.category}&page=${page}&limit=${props.pageSize}`;
   setLoading(true);
    let Data = await fetch(url);
    props.setProgress(30);
    let parsedData = await Data.json();
    console.log(parsedData)
    props.setProgress(70);
    setArticles(parsedData.data);
    setTotalResults(parsedData.meta.found);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  },[page,props.category])
 
 const handlePrevClick = async ()=>{
   setPage(page - 1);
  
}
 const handleNextClick = async ()=>{
    if(!(page+1>Math.ceil(totalResults/props.pageSize))){
      setPage(page +1)
  
  }
  }
  
    return (
      <div>
          <div className='container'>
 
          <h2 className="text-center" style ={{margin:'30px 0px'}}>DailyNews - Top Headlines</h2>
          {loading && <Spinner/>}
          
          
          <div className="row">
            {!loading && articles && articles.map((element)=>{
              return  <div className='col-md-4' key={element.url}>
              <NewsItem title = {element.title?element.title.slice(0,68):""} description = {element.description?element.description.slice(0,120):""} imageUrl = {element.image_url} newsUrl={element.url}  date={element.published_at} source={element.source}/>
            </div>
            })}
            </div>
            </div>
          
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}> &larr;Previous</button>
            <button type="button"  disabled={page >=Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
           
          
          
          </div>
       
      
        
    )
  }
  News.defaultProps={
    pageSize : 5,
    locale : "in",
    category : "general"
  }
  News.propTypes = {
    pageSize: PropTypes.number,
    locale: PropTypes.string,
    category: PropTypes.string
  }


export default News