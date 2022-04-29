import React,{ Component } from "react";



class Header extends Component {

    
    inputChange = (event) => {
        console.log(event)
    }

    render(){
        return (
            <>
                <header>
                    <div 
                        className="logo"
                        onClick={()=> console.log('I was clicked')}
                    >Logo</div>
                    <input
                        onChange={(e)=> this.inputChange(e)}
                    />
                </header>
            </>
        )
    }

}

export default Header;