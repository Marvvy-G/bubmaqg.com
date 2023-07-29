import React, {Component} from 'react';

class Field extends Component {
    render(){
        return(
            <div className="form-group">             
                {this.props.elementName === 'input' ?
                    <input 
                        className="form-control" 
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        data-sb-validations="required" 
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        /> 
                    
                    :
                          <div className="col-md-6">
                            
                            <div className="form-group form-group-textarea mb-md-0"> 
                            <textarea 
                                className="form-control" 
                                id={this.props.name}
                                placeholder={this.props.placeholder}
                                data-sb-validations="required"
                                name={this.props.name}
                                onChange={this.props.onChange}
                                onBlur={this.props.onBlur}
                            />
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                   
               }
             <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>   
        )
    }
}

export default Field;