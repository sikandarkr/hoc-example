import React, { Component } from 'react';
import Hoverable from './HocComponent';
import './App.css'
class AppComponent extends Component {
  render() {
    const { hovered, click } = this.props;
    return (
      <React.Fragment>
        <h1 className={click ? `red` : `blue`}>{hovered ? <p>Mouse Hovered</p> : <p>Mouse Unhovered</p>}</h1>
      </React.Fragment>
    )
  }
}
const App = Hoverable(AppComponent, 'css-selector');
export default App;
