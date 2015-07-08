import React from 'react';

export default class MessageAuthor extends React.Component {

  render() {
    return (
      <span style={this.getStyle()}>
        {this.props.author.name}
      </span>
    );
  }

  getStyle() {
    return {
      margin: '0 8px 0 0',
      fontSize: '13px',
      color: '#757575',
      fontWeight: '200'
    }
  }

}
