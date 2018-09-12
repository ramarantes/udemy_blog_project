import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostNew extends Component {



    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder={field.label}
                      {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values){
        console.log('submit', values);
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
                </form>
        );
    }
}

function validate(values){
    console.log(values);
    const errors ={};

    //validate de imputs from 'values'
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.content){
        errors.content = "No content, please write something";
    }


    return errors; // if empty, the form is ok

}

export default reduxForm({
    validate,
    form:'PostsNewForm'
})(PostNew);