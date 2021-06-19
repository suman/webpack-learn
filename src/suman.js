
import SumanImage from './components/suman-image/suman-image.js';
import Heading from './components/heading/heading.js';
import _ from 'lodash'
const sumanImage = new SumanImage();
sumanImage.render();


const headingInstance = new Heading();
headingInstance.render(_.upperFirst("suman image"));