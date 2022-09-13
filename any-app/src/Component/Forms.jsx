import React, { Component } from 'react';

class Forms extends Component {

constructor(props) {
  super(props)

  this.state = {
    Name: ""
  }
}
    handleNameChange = (event) => {
        this.setState({Name:event.target.value})
    }

    handleNameChange = (event) => {
        this.setState({SurName:event.target.value})
    }

    render() {
        return (
            <div>
                <form action="">
            <label htmlFor="Name">Name</label>
            <input type="text" value={this.state.Name} onChange={this.handleNameChange} />
            <br />
            <label htmlFor="SurName">SurName</label>
            <input type="text" value={this.state.SurName} onChange={this.handleSurNameChange} />
            <br />
            <label htmlFor="Email">Email</label>
            <input type="text" />
            <br />
            <label htmlFor="Phone">Phone</label>
            <input type="phone" />
            <br />
            <label htmlFor="Password">Password</label>
            <input type="Password" />
            <br />
            <label htmlFor="Sign in">Sign in</label>
             <input type="sign in" />
        </form>
            </div>
        );
    }
}

export default Forms;
