import React from "react";
import "./CloserToHome.css";
import Lute from './YoutubeEmbed.js'
import libHero from './cthImages/websiteBanner.png'
import ribbit from './cthImages/ribbit.png'
import rabbit from './cthImages/rabbit.gif'

// const images = [];

// for (let i = 1; i <= 6; i++) {
//   images.push(require(`./cthImages/cth${i}.png`));
// }

export default function CloserToHome() {


  return (
    <>  
      <div className='body-content'>
       
        <img src={libHero} alt='Closer To Home'/>
        <br />
        A surreal-horror puzzle game about putting your dad back together.<br />
        Heavily inspired by titles like Yume Nikki, Hylics, and Undertale.<br />
        <img src={ribbit} alt="Ribbit's Avi" width='25%'/>
        <br />
        It was covered in a video essay by Lute (18:35): <br />
        <br />
        <Lute />
        <br />
        Choose the fate of those around you, and try to figure out who can be trusted in a narrative about hopelessness and loss.
        <img src={rabbit} alt="Rabbit's Avi"/>
        <br />
        <iframe src="https://store.steampowered.com/widget/2149870/" title="Steam Link"></iframe>
        <br />
        All the music and SFX were made by Deltoid:
        <br />
        <br />
        <iframe title= "Bandcamp Link" style={{border: '0', width: '400px', height: '472px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3322804856/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless><a href="https://dxdeltoid.bandcamp.com/album/closer-to-home-ost">Closer To Home OST by Deltoid</a></iframe>
      </div>
    </>
  );  
}