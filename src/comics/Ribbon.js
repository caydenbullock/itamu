import React from "react";
import './Comics.css';
import LoadComic from './LoadComic'

export function R1() {
  const images = [];
  for (let i = 1; i <= 30; i++) {
      images.push(require(`../ribbon/r1/pbookroom${i}.png`));
  }
  return (
    <LoadComic images={images} alt={'comic'}/>
  );
}

export function R2() {
  const images = [];
  for (let i = 1; i <= 19; i++) {
    if ([2,3].includes(i)) {
      images.push(require(`../ribbon/r2/pground${i}.gif`));
    } else {
      images.push(require(`../ribbon/r2/pground${i}.png`));
    }
  }
  return (
    <LoadComic images={images} alt={'comic'} />
  );
}

export function R3() {
  const images = [];
  for (let i = 1; i < 19; i++) {
      images.push(require(`../ribbon/r3/pchurch${i}.png`));
  }
  return (
    <LoadComic images={images} alt={'comic'} />
  );
}
