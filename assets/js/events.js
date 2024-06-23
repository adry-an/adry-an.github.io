import { slides } from "./data.js";
import { updateSlide } from "./updateSlide.js";
import { startAutoSlide, stopAutoSlide, setCurrentIndex, currentIndex } from "./autoSlide.js";


const clickArrowRight = () => {
    const arrowRight = document.querySelector(".arrow_right");
    arrowRight.addEventListener("click", () => {
        stopAutoSlide();
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        //console.log('Right clicked, newIndex:', newIndex);
        setCurrentIndex(newIndex);
        updateSlide(newIndex);
        setTimeout(() => {
            startAutoSlide();
        }, 5000);
    });
};
export { clickArrowRight };

const clickArrowLeft = () => {
    const arrowLeft = document.querySelector(".arrow_left");
    arrowLeft.addEventListener("click", () => {
        stopAutoSlide()
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        //console.log('Left clicked, newIndex:', newIndex);
        setCurrentIndex(newIndex);
        updateSlide(newIndex);
        setTimeout(() => {
            startAutoSlide();
        }, 5000);
    });
};
export { clickArrowLeft };

const clickDot = () => {
    const dotElements = document.querySelectorAll(".dots .dot");
    dotElements.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            stopAutoSlide();
            const newIndex = (e.target.dataset.index);
            //console.log('Dot clicked, newIndex:', newIndex);
            setCurrentIndex(newIndex);
            updateSlide(newIndex);
            setTimeout(() => {
                startAutoSlide();
            }, 5000);
        });
    });
};
export { clickDot };
