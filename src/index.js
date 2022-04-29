import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';
import JSON from './db.json';


class App extends Component {

    state = {
        news:JSON,
        footerText:'I am a happy footer'
    }


    render(){
        return(
            <div className="hey">
                <Header/>
                <NewsList
                    news={this.state.news}
                />
                <Footer
                    footerText={this.state.footerText}
                />
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)