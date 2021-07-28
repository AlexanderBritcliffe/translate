import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;



//the above function (color) will be called with whatever value
// is inside of our colorcontext object
//
// line 14---we are taking whatever string is inside color
// context and using it as our button

//anytime we use consumer to get value out of
// pipe we pass in single function as child that
//  child will be called with whatever value is inside of the pipe or context object


//if the context value holds the string english that text is submit if not vorleggen
