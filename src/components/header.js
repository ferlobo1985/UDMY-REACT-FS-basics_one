import React,{ Component } from "react";

class Header extends Component {

    state = {
        title:'The keyword are:',
        keywords:'',
        count:0
    }

    
    inputChange = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    addOne(){
        this.setState((state,props)=>({
            count: state.count + 1
        }))
    }


    render(){
        //console.log(this.state)
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
                    <br/>
                    <div>{this.state.title}</div>
                    <div>{this.state.keywords}</div>
                    <br/>
                    <div>{this.state.count}</div>
                    <button onClick={()=>this.addOne()}>Add one</button>
                </header>
            </>
        )
    }

}

export default Header;