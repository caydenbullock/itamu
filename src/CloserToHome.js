import React from "react";
import "./CloserToHome.css";
import Lute from './YoutubeEmbed.js'

const images = [];

for (let i = 1; i <= 6; i++) {
  images.push(require(`./cthImages/cth${i}.png`));
}

export default function CloserToHome() {


  return (
    <>  
      <div className='body-content'>
        <img src=".\cthImages\cth9.png" alt=""></img>
        
        <iframe src="https://store.steampowered.com/widget/2149870/"  width="646" height="190"></iframe>
        Heavily inspired by titles like Yume Nikki, Hylics, and Undertale.<br />
        <br />
        It was covered in a video essay by Lute (18:35): <br />
        <Lute />
        All the music and SFX were made by Deltoid:
        <iframe style={{border: '0', width: '400px', height: '472px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3322804856/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless><a href="https://dxdeltoid.bandcamp.com/album/closer-to-home-ost">Closer To Home OST by Deltoid</a></iframe>
      </div>
    </>
  );  
}