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
            </div>
        );
    }
    
    render(){
        console.log('postNew');
        return( 
            <form>
                    <Field name="title" label="Title"  component={this.renderField} />
                    <Field name="Categories" label="categories"  component={this.renderField} />
                    <Field name="content" label="Content"  component={this.renderField} />

                </form>
        );
    }
}

function validate(values){
    console.log(values);

}

export default reduxForm({
    validate,
    form:'PostsNewForm'
})(PostNew);