import React, { Component } from 'react';
import { Button, Card, CardSection, InputText } from './common';

class SignUpForm extends Component {
  state = {
    email: '',
    password: ''
  };
  render() {
    return (
      <Card>
        <CardSection>
          <InputText
            label="Email"
            value={this.state.email}
            placeholder="example@mail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <InputText
            label="Password"
            type="password"
            placeholder="******"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default SignUpForm;
