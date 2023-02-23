import React , { useState } from "react";
import "./Portfolio.css";

const images = [];

for (let i = 1; i <= 19; i++) {
  if (i === 3){
    images.push(require(`./portfolioImages/ptf${i}.jpeg`));
  } else if ([8,9,15,16,17,18].includes(i)) {
    images.push(require(`./portfolioImages/ptf${i}.gif`));
  } else {
    images.push(require(`./portfolioImages/ptf${i}.png`));
  }
}

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(18);

  const handleClick = (index) => {
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  };

  return (
    <div className="grid">
      {images.map((image, index) => (
        <img
          alt={'showcase images'}
          key={index}
          src={image}
          className={`image ${selectedImage === index ? "enlarged" : ""}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}


