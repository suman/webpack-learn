// import helloWorld from './hello-world.js'
// import HelloWorldButton from './src/components/helloworld-button/hello-world-button.js'
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from 'lodash'

const headingInstance = new Heading();
headingInstance.render(_.upperFirst('hello world'))

// import addImage from './add-image.js'
const hellWorldIntance = new HelloWorldButton();
hellWorldIntance.render("HELLO WORLD")

if (process.env.NODE_ENV === 'production') {
    console.log("This is production")
} else {
    console.log("This is development")
}
// addImage();