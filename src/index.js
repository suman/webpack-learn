// import helloWorld from './hello-world.js'
// import HelloWorldButton from './src/components/helloworld-button/hello-world-button.js'
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';

import Heading from './components/heading/heading.js';

const headingInstance = new Heading();
headingInstance.render()

// import addImage from './add-image.js'
const hellWorldIntance = new HelloWorldButton();
console.log(hellWorldIntance.render())

if (process.env.NODE_ENV === 'production') {
    console.log("This is production")
} else {
    console.log("This is development")
}
// addImage();