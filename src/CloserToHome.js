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
        <img key={1} src={images[2]} alt={'comic'}/>
        Closer To Home is a game about hopelessness. <br />
        <img key={2} src={images[0]} alt={'comic'}/>
        Without clear intentions or outcomes, a boy navigates his neighborhood to help and harm others.<br />
        <img key={3} src={images[4]} alt={'comic'}/>
        As he finds parts of his fathers body, the possibility of reassembly arises.<br />
        <img key={4} src={images[5]} alt={'comic'}/>
        I spent about a year learning how to code by making this game. <br />
        <img key={5} src={images[3]} alt={'comic'}/>
        It was covered in a video essay by Lute (18:35): <br />
        <Lute />
        All the music and SFX were made by Deltoid:
        <iframe style={{border: '0', width: '400px', height: '472px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3322804856/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless><a href="https://dxdeltoid.bandcamp.com/album/closer-to-home-ost">Closer To Home OST by Deltoid</a></iframe>

        Heavily inspired by titles like Yume Nikki, Hylics, and Undertale.<br />
        Check it out <br />
        <iframe src="https://store.steampowered.com/widget/2149870/"  width="646" height="190"></iframe>
      </div>
    </>
  );  
}