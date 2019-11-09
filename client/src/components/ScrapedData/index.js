import React from 'react';

export default (props) => {
    if (props.scraped) {
        return (
            props.scraped.map((news, i) => {
                return (
                    <div key={i} className="card mb-3" style={{ minWidth: "100%" }}>
                        <div className="container" style={{ clear: "both" }}>
                            <a href={news.link} rel="noopener noreferrer" target="_blank" style={{ float: "left" }}>{news.title}</a>
                            <button className="btn btn-success" type="button" style={{ float: "right" }} onClick={() => props.handleSave(news.title, news.link, news.summary)}>Save</button>
                            <ul className="list-group list-group-flush" style={{ clear: "both" }}>
                                <li className="list-group-item">{news.summary}</li>
                            </ul>
                        </div>
                    </div>
                )
            })
        )
    }
}