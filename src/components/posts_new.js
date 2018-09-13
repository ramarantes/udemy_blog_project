import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'
import {createPost} from '../actions'
import {connect} from 'react-redux';

class PostNew extends Component {



    renderField(field){
        const {meta : {touched,error}} = field;
        const className=`form-group ${touched && error ? 'has-danger': ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder={field.label}
                      {...field.input}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values){
        console.log('submit', values);
        this.props.createPost(values, () =>{
            this.props.history.push('/');
        });
        console.log('callbackcalled');
    }
    
    render(){
        const { handleSubmit } = this.props;


        console.log('postNew');
        return( 
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="title" label="Title"  component={this.renderField} />
                    <Field name="categories" label="Categories"  component={this.renderField} />
                    <Field name="content" label="Content"  component={this.renderField} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </form>
        );
    }
}

function validate(values){
    console.log(values);
    const errors ={};

    //validate de imputs from 'values'
    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title with at least 3 characters";
    }
    if(!values.categories){
        errors.categories = "Please, put some category";
    }
    if(!values.content){
        errors.content = "No content, please write something";
    }


    return errors; // if empty, the form is ok

}

export default reduxForm({
    validate,
    form:'PostsNewForm'
})(
    connect(null,{createPost})(PostNew)
);
