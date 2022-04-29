import React,{ Component } from 'react';


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:1
        }
    }


    render(){
        console.log(this.state)
        return(
            <footer>
                {this.props.footerText}
            </footer>
        )
    }
}


export default Footer;
