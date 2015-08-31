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

class Child extends Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
      );
  }
}

var Coms = {
  Child: React.createFactory(Child)
}

class Parent extends Component {
  renderComponents() {
    var coms = [];
    const {components} = this.props;
    components.map(function(component, key) {
      component.props.key = key;
      coms.push(Coms[component.name](component.props));
    })
    return coms;
  }
  render() {
    const {text} = this.props.content;
    return (
      <div >
        <h1>0</h1>
        {this.renderComponents()}
      </div>
      );
  }
}

React.render(<Parent content={{
  text: '#123'
}}
components= {[
  {
    name: 'Child',
    props: {
      text: 1
    }
  },
  {
    name: 'Child',
    props: {
      text: 2
    }
  },
  {
    name: 'Child',
    props: {
      text: 3
    }
  },
  {
    name: 'Child',
    props: {
      text: 4
    }
  }
]}
/>, document.getElementById('app'))
