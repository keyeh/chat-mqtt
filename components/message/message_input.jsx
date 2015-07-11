import React from 'react';
import {TextField} from 'material-ui';

const ENTER_KEY = 13;

export default class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div style={this.getContainerStyle()}>
        <TextField style={this.getInputStyle()}
          value={this.state.message}
          onEnterKeyDown={this._onEnterKeyDown.bind(this)}
          onChange={this._onChange.bind(this)} />
      </div>
    );
  }

  _onChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  _onEnterKeyDown(event) {
    this.props.addMessage(event.target.value);
    this.setState({message: ''});
  }

  getContainerStyle() {
    return {
      width: '100%',
      position: 'fixed',
      bottom: '0',
      backgroundColor: '#FAFAFA',
      textAlign: 'center'
    };
  }

  getInputStyle() {
    return {
      width: 'calc(100% - 16px)'
    };
  }
}
