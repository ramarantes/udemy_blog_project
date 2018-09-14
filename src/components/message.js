import React,{Component} from 'react'

export default class Messages extends Component {

    constructor(props){
        super(props);
        this.state = {message : ""};
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //         message : ""
    //       })
    //     }, 1500);
    // }
    componentDidMount(){
        this.setState({message:this.props.message});
    }

    render(){
        return (<div className="Mensagem">{this.state.message}</div>);
    }
}

