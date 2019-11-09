import React, { Component } from 'react';
import ScrapedData from '../components/ScrapedData';
import API from '../utils/API';
import cheerio from 'cheerio';

class Home extends Component {
    state = {
        scraped: []
    }

    loadResults = () => {
        API.scrapeNews()
            .then(response => {
                let $ = cheerio.load(response.data);
                $("article").each(async (i, element) => {
                    var title = $(element).find("h2").text();
                    var link = $(element).find("a").attr("href");
                    var summary = $(element).find("p").text();
                    if (summary) {
                        await this.setState({
                            scraped: [...this.state.scraped, { title: title, link: 'https://nytimes.com' + link, summary: summary }]
                        })
                    }
                })
            })
    }

    componentDidMount = () => {
        this.loadResults();
    }

    handleScrape = () => {
        this.loadResults();
    }

    handleSave = (title, link, summary) => {
        API.saveNews({ title, link, summary })
            .then(alert('News saved...'))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className='container text-center'>
                <div className='row mb-5'>
                    <div className='col'>
                        <button className="btn btn-warning" type="button" onClick={this.handleScrape}>Scrape New Articles</button>
                    </div>
                    <div className='col'>
                        <button className="btn btn-danger" type="button">Clear Articles</button>
                    </div>
                </div>
                <div className='row'>
                    <ScrapedData scraped={this.state.scraped} handleSave={this.handleSave} />
                </div>
            </div>
        )
    }
}

export default Home;