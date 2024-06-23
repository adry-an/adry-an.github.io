import { imgFolder } from './init.js';
import { slides } from './data.js';

const updateSlide = (index) => {
    //console.log("update :", index);

    const txtBanner = document.querySelector("p");
    const imgBanner = document.querySelector(".banner-img");

    txtBanner.classList.remove('visible');
    txtBanner.classList.add('hidden');

    imgBanner.src = imgFolder + slides[index].image;

    imgBanner.onload = () => {
        txtBanner.innerHTML = slides[index].tagLine;
        txtBanner.classList.remove('hidden');
        txtBanner.classList.add('visible');
    };

    const dotElements = document.querySelectorAll(".dots .dot");
    dotElements.forEach((dot, dotIndex) => {
        if (dotIndex == index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
};

export { updateSlide };

