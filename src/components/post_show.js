import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../actions'
import {Link} from 'react-router-dom'


class PostShow extends Component {
    componentDidMount(){
        if(!this.props.post){
            const {id} = this.props.match.params; //wildcards inside de url used by route
            this.props.fetchPost(id) ;  
        }
    }

    onDeleteClick(){
        this.props.deletePost(this.props.match.params.id, () => {this.props.history.push('/')} );
    }
    

    render(){
        const {post} = this.props;

        if(!post){
            return <div className="loader" />
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
                    Delete post
                </button>
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
export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);