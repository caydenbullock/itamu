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
      backgroundColor: 'black',
      color: 'white',
    });
  const handleMouseEnter = () => {
    setButtonStyle({
      backgroundColor: 'white',
      color: 'black',
    });
  };
  const handleMouseLeave = () => {
    setButtonStyle({
      backgroundColor: 'black',
      color: 'white',
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
      <Button href="#videogame" text="Closer To Home" onClick={() => props.selectPart('videogame')}/>
      <Button href="#comics" text="Comics" onClick={() => props.selectPart('comics')}/>
      <Button href="#portfolio" text="Portfolio" onClick={() => props.selectPart('portfolio')}/>
      <Button href="#about" text="About" onClick={() => props.selectPart('about')}/>
  </nav>
  );
}


