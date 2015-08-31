import React, { Component, PropTypes } from 'react';
import showdown from 'showdown';

function makeHTMLComponent(html) {
  return React.DOM.div({
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

let converter = new showdown.Converter({
  parseImgDimensions: true
});

class Test extends Component {
  render() {
    const {text} = this.props.content;

    return (
      <div>
        {converter.makeHtml(text)}
      </div>
      );
  }
}

class MarkDown extends Component {
  render() {
    const {text} = this.props.content;

    return (
      <div >
        {makeHTMLComponent(converter.makeHtml(text))}
        123
      </div>
      );
  }
}

MarkDown.propTypes = {
  content: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
};

React.render(<MarkDown content={{
  text: '#123'
}}/>, document.getElementById('app'))
