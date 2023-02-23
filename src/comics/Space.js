import React from "react";
import './Comics.css';
import LoadComic from './LoadComic'

export function S1() {
  const images = [];
  for (let i = 1; i <= 10; i++) {
      images.push(require(`../2lyfe/space1/space${i}.png`));
  }
  return (
    <LoadComic images={images} />
  );
}

export function S2() {
  const images = [];
  for (let i = 1; i <= 10; i++) {
      images.push(require(`../2lyfe/space2/mug${i}.png`));
  }
  return (
    <LoadComic images={images} />
  );
}

export function S3() {
  const images = [];
  for (let i = 1; i <= 13; i++) {
      images.push(require(`../2lyfe/space3/genesis${i}.png`));
  }
  return (
    <LoadComic images={images} />
  );
}

export function S4() {
  const images = [];
  for (let i = 1; i < 13; i++) {
      images.push(require(`../2lyfe/space4/pal${i}.png`));
  }
  return (
    <LoadComic images={images} />
  );
}
