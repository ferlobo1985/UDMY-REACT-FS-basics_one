import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'


import Header from './components/header';


const App = () => (
    <div className="hey">
        <Header/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)