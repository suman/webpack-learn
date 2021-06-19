import imageData from './assets/suman.jpg'
import alt from './alt.txt'

function addImage() {
  let img = document.createElement('img');
  img.alt = alt;
  img.width = 400;
  img.src = imageData;
  document.querySelector('body').appendChild(img)
}

export default addImage;