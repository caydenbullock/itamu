import React from "react";
import './Comics.css';
import LoadComic from './LoadComic';




export default function JailTest() {
  
  const images = [];

  for (let i = 1; i <= 14; i++) {
    if ([3,4,7,9,10,11,13].includes(i)) {
      images.push(require(`../jail/pjail${i}.gif`));
    } else {
      images.push(require(`../jail/pjail${i}.png`));
    }
  }

  return (
    <LoadComic images={images} alt={'comic'}/>
  );
}
//   return (
//     <div >
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={'comic pages'} />
//       ))}
//     </div>
//   );
// }


