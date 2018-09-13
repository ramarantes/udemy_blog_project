import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'

class PostShow extends Component {
    componentDidMount(){
        const {id} = this.props.match.params; //wildcards inside de url used by route
        this.props.fetchPost(id) ;  
    }

    render(){
        const {post} = this.props;

        if(!post){
            return <div className="loader" />
        }
        return (
            <div>
                <h3> {post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>

            </div>
        );
    }
}

function mapStateToProps({posts},ownProps){
    return{post:posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchPost})(PostShow);