import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function mapStateToProps(state){
    return {
        posts: state.posts
    };
}

// function mapDispachToProps(dispach){
//     return bindActionCreators({fetchPosts},dispach);
// }

class PostIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    click = () => {
        this.props.fetchPosts();
    }
    // click = function(a){
    //     debugger;
    //     this.props.fetchPosts();
    // }.bind(this);

    renderPosts(){
        
        return _.map(this.props.posts, post => {
            // console.log(post,'feliz');
            return (
            <li className="list-group-item" key={post.id}>
                <Link to={`/post/${post.id}`}>  {post.title} </Link>
            </li>)
        });
    }

    render(){
        console.log('normal');
        return ( 
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/post/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
                
            </div>
        )
    }
}

// export default connect(mapStateToProps,mapDispachToProps)(PostIndex);
export default connect(mapStateToProps,{fetchPosts})(PostIndex);