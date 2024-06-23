//"use-strict"; par défaut avec les modules

import { createElements } from './createElements.js';
import { updateSlide } from './updateSlide.js';
import { startAutoSlide } from './autoSlide.js';
import { clickArrowRight, clickArrowLeft, clickDot } from './events.js';


let currentIndex = 0;

createElements();
updateSlide(currentIndex);
startAutoSlide();
clickArrowRight();
clickArrowLeft();
clickDot();






