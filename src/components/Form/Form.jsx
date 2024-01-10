import React from 'react';
import './Form.css'
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      this.setState({name: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
      }
  
    handleSubmit(event) {
      alert('Name: ' + this.state.name + 'Message: ' + this.state.message);
      event.preventDefault();
    }

    render() {
        return (
        <form className='form' onSubmit={this.handleSubmit}>
            <div class="form-container grid">
              <label className='label fw-7'>
                Name:
                <input type="text fw-4" value={this.state.name} onChange={this.handleNameChange} />
              </label>
              <label className="label fw-7">
                Message:
                <input type="text fw-4" value={this.state.message} onChange={this.handleMessageChange} />
              </label>
              <div className="submit-button">
              <input className="button" type="submit" value="Submit" />
              </div>
              </div>
            </form>
          );
        }
}

export default Form;