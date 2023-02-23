import React, { useState, useEffect } from "react";
import './Comics.css';


export default function LoadComic(props) {
  const [images, setImages] = useState(props.images)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = images[0];
  }, [images]);

  return (
    <div>
      {loaded && (
        <>
          <img src={images[0]} alt={'comic page'} />
          {images.slice(1).map((image, index) => (
            <img key={index} src={image} alt={'comic page'} />
          ))}
        </>
      )}
    </div>
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


