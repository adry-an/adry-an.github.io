import { slides } from './data.js';
import { updateSlide } from './updateSlide.js';

let autoSlideInterval;
let currentIndex = 0;

const startAutoSlide = () => {
    if (!autoSlideInterval) {
        autoSlideInterval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            updateSlide(currentIndex);
        }, 5000);
        //console.log('Auto Slide On')
    };
}
export { startAutoSlide };

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
    //console.log('Auto Slide Of')
};
export { stopAutoSlide }

const setCurrentIndex = (index) => {
    currentIndex = index;
    //console.log('currentIndex :', index);
};

export { currentIndex, setCurrentIndex };