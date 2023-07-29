import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';

const fields = {
    sections: 
        [
            [
        {name:'name',    elementName: 'input',    type: 'text',   placeholder: 'Your Name *' },
        {name:'email',   elementName: 'input',    type: 'email',  placeholder: 'Your Email *' },
        {name:'phone',   elementName: 'input',    type: 'text',   placeholder: 'Your Phone *' }
            ],
            [
        {name:'message', elementName: 'textarea', type: 'text',   placeholder: 'Type a message*' }
            ]
        ]
}

class Contact extends Component {
    
    submitForm = (e) => {
        alert("form submitted. Thank you very much");
    }
    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" id='contactus'>Contact Us</h2>
                    <h3 className="section-subheading">Bubmaq-G is committed to excellent customer service!</h3>
                </div>
                {/* <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms-->
                <!-- to get an API token!--> */}
                <form onSubmit={e => this.submitForm(e)} name="sentMessage" novalidate="novalidate" id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">

                         {fields.sections.map((section, sectionIndex) => {
                           console.log("Rendering section", sectionIndex, "with", section);
                           return (
                                <div className='col-md-6' key={sectionIndex}>
                                    {section.map((field, i) => {
                                        return <Field 
                                                {...field} 
                                                key={i} 
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                />
                                    })}
                                </div>
                            )
                         })}

                    
                    </div>
                    {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    {/* <!-- Submit Button--> */}
                    <div className="text-center">
                        <button 
                            className="btn btn-primary btn-xl text-uppercase"
                            id="submitButton" 
                            type="submit"
                            onClick={e => this.submitForm(e)}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                
            </div>

            
            
        </section>


       
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name:"",
        email:'',
        phone:'',
        message:'',
    }),
    validate: values => {
        const errors = {};

        Object.keys(values).map(v => {
            if(!values[v]){
                errors[v] = 'Required';
            }
        })
        return errors;


    },
    handleSubmit: (values, {setSubmitting})=> {
        alert("You've submitted the form")
    }
})(Contact);