import './App.css';
import eye from './eye.png';
import React, { useState } from 'react';

export function HomeHeader() {
  return (
    <h1 className='home-header'>   
      <img src={eye} width='100' alt='eye'/>
      ISTHISAMUG 
      <img src={eye} width='100' alt='eye'/>
    </h1>
  );
}

export function Button({text, onClick}) {

  const [buttonStyle, setButtonStyle] = 
    useState({
      backgroundColor: 'white',
      color: 'black',
    });
  const handleMouseEnter = () => {
    setButtonStyle({
      backgroundColor: 'black',
      color: 'white',
    });
  };
  const handleMouseLeave = () => {
    setButtonStyle({
      backgroundColor: 'white',
      color: 'black',
    });
  };
  return(
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
    {text}
    </button>
  )
}

export function HomeNav(props){
  return(
  <nav className='nav'>  
      <Button text="Closer To Home" onClick={() => props.selectPart('videogame')}/>
      <Button text="Comics" onClick={() => props.selectPart('comics')}/>
      <Button text="Portfolio" onClick={() => props.selectPart('portfolio')}/>
      <Button text="About" onClick={() => props.selectPart('about')}/>
  </nav>
  );
}


