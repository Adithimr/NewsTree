import React from 'react'

const NewsItem =(props)=> {
   let {title,description,urlToImage,newsUrl,author,date,source} =props;
    return (
      <div className="my-3">
            <div className="card" >
              <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-info">{source}</span>
            </div>
            <img src={urlToImage?urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/india-hnis-sixteen_nine.png?VersionId=K_jKYeDOo9bWZ5dqgKNFQCCjhWNC6.JO"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}
             </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {date}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
</div>
      </div>
    )
  
}

export default NewsItem