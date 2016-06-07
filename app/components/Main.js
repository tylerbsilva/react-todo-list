import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Main = React.createClass({
  render(){
    return (
      <span>
        <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, this.props)}
        </ReactCSSTransitionGroup>
      </span>
    )
  }
});
export default Main;
