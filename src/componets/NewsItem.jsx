import React from 'react'
const NewsItem = (props)=>{

   let {title,description, imageUrl, newsUrl, date, author, source} = props
    return (
      <div>
      <span className="badge rounded-pill" style={{marginLeft:'3px',fontSize:'small',backgroundColor:'inherit'}}>{source}</span>
      <div className="card" style={{height:'500px',width:'100%',position:'relative',marginTop:'-25px',zIndex:'-5',borderRadius:'10px'}}>
  <img src={!imageUrl?'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg':imageUrl} className="card-img-top" alt="..." style={{height:'250px'}}/>
  <div className="card-body">
    <h5 className="card-title">{title}
    
    </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author? author:'unknown person'} on {new Date(date).toDateString()}</small></p>
    <a href={newsUrl} className='btn btn-sm btn-dark'>Read more</a>
  </div>
</div>
      </div>
    )
  } 

export default NewsItem