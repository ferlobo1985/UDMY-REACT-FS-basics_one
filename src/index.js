import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'

import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';


class App extends Component {

    state = {
        news:JSON
    }


    render(){
        return(
            <div className="hey">
                <Header/>
                <NewsList
                    news={this.state.news}
                />
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)