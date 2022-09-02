

import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor() {
        super();
    }
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }} >
                    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"85%",zIndex:"1"}}>
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/342200/342229.6.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
