import imageData from '../../assets/suman.jpg'

function SumanImage() {
  let img = document.createElement('img');
  img.alt = "Suman Bogati....";
  img.width = 400;
  img.src = imageData;
  document.querySelector('body').appendChild(img)
}

export default SumanImage;