import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HomeHeader} from './App';
import {HomeNav} from './App';
import reportWebVitals from './reportWebVitals';
import { CSSTransition } from 'react-transition-group';
import { Body } from './Body';

class Everything extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bodyPart: 'videogame'
    }
  }

  setBodyPart = (selectedPart) => {
    this.setState({
      bodyPart : selectedPart,
    })
  }

  render (){
    return(
      <div className='page-wrapper'>      
          <HomeHeader />
          <HomeNav onClick={this.props.toggleBgColor} selectPart={this.setBodyPart}/>
          <Body activeBody={this.state.bodyPart}/>
      </div>
    )
  }
}

class Top extends React.Component {
  state = {
    bgColor: 'black',
  };

  toggleBgColor = () => {
    this.setState({ 
      bgColor: 'black',
    });
  };

  render (){
    return(
      <CSSTransition
        in={this.state.bgColor === 'black'}
        timeout={300}
        classNames={{
          enter: 'bg-color-enter',
          enterActive: 'bg-color-enter-active',
          enterDone: 'bg-color-enter-done',
        }}
      >
        <Everything toggleBgColor={this.toggleBgColor} />
      </CSSTransition>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Top /> 
);

reportWebVitals();
