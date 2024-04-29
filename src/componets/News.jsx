import React,{ useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=>{
 News.defaultProps = {
  country:'in',
  category:'general',
  pagesize:10
 }
 News.prototype = {
   country : PropTypes.string,
  category : PropTypes.string
 }

 const [articles, setarticles] = useState([]);
 const [loading, setloading] = useState(true);
 const [page, setpage] = useState(1);
 const [totalResults, settotalResults] = useState(0)


 const updateNews =async() =>{
  props.setProgress(25)
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let url=`${proxyUrl}https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;

  let data = await fetch(url)
  props.setProgress(75)
  let parsedData =await data.json()
  setarticles(parsedData.articles)
  settotalResults(parsedData.totalResults);
  props.setProgress(100)

}
useEffect(() => {
  document.title =props.category?`Express News - ${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`:'Express News - Home';
  setTimeout(()=>{
  setloading(false)
  updateNews();
  },3000)
},[]);

// const handlePrev = async()=>{
//   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page-1}&pagesize=${props.pagesize}`
//   // let data = await fetch(url)
//   // console.log(page-1)
//   // let parsedData =await data.json()
//   //  setState({
//   //   page : page-1,
//   //   articles : parsedData.articles
//   //  }) 
//   setpage(page-1)
//   updateNews()
//  }
// const handleNext = async()=>{
// setpage(page+1)
// updateNews()
// }

const fetchMoreData = async() => {
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}` 
  setpage(page+1);
    let data = await fetch(url)
    let parsedData =await data.json()
   setarticles(articles.concat(parsedData.articles))
     setloading(false);
    settotalResults(parsedData.totalResults); 
  }; 
 
 return (
      <>

        <h2 className='text-center'>Top Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length < totalResults}
    loader={<Spinner/>}
    // scrollableTarget="scrollableDiv"
  >
      <div className="container">
        <div className='row'>
        {articles.map(article=>{
         return <div className="col-md-4 my-4 cards1" key={articles.indexOf(article)+'key'}>
          <NewsItem  title={article.title?article.title.slice(0,50):''} description={article.description?article.description.slice(0,90):''} imageUrl={article.urlToImage} newsUrl={article.url} date={article.publishedAt} author={article.author} source={article.source.name}/>
        </div>
        })} 
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }

export default News