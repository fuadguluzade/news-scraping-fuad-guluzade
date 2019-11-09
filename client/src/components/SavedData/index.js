import React from 'react';

export default (props) => {
    if (props.savedData) {
        return (
            props.savedData.map((news, i) => {
                return (
                    <div key={i} className="card mb-3" style={{ minWidth: "100%" }}>
                        <div className="container" style={{ clear: "both" }}>
                            <a href={news.link} rel="noopener noreferrer" target="_blank" style={{ float: "left" }}>{news.title}</a>
                            <button className="btn btn-danger" type="button" style={{ float: "right" }} onClick={() => props.handleDelete(news._id)}>Delete from articles</button>
                            <button className="btn btn-success" type="button" style={{ float: "right" }} onClick={() => props.setShow(news._id)}>Article Notes</button>
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