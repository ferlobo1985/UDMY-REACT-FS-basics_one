import React,{ Component } from "react";

class Life  extends Component {
    constructor(props){
        super(props);
        console.log('1-constructor')
        this.state = {name:'Francis'}
    }


    static getDerivedStateFromProps(props,state){
        console.log('2-getDerivedStateFromProps');
        if(state.name === 'Ron'){
            return {
                name:'Milhouse'
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('x-shouldComponentUpdate');
        if(nextState.name === 'Steve'){
            return false
        }
        return true;
    }


    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('x-getSnapshotBeforeUpdate')
        let age = 20;
        return age;
    }


    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('x-componentDidUpdate');
        // console.log(prevState);
        // console.log(this.state)
        console.log(snapshot)
    }


    componentDidMount(){
        console.log('4-componentDidMount');
    }

    componentWillUnmount(){
        console.log('x-componentWillUnmount');
    }

    render(){
        console.log('3-render');
        return(
            <>
                <hr/>
                <div>{this.state.name}</div>
                <button  onClick={()=> this.setState({name:'Ron'})}>
                    Change name
                </button>
            </>
        )
    }
}

export default Life