import { slides } from './data.js';
import { banner, dotsContainer } from './init.js';


const createElements = () => {
    const arrowLeft = document.createElement("img");
    arrowLeft.classList.add("arrow_left", "arrow");
    arrowLeft.src = './assets/images/arrow_left.png';
    banner.appendChild(arrowLeft);
    //console.log('Arrow left created:', arrowLeft);

    const arrowRight = document.createElement("img");
    arrowRight.classList.add("arrow_right", "arrow");
    arrowRight.src = './assets/images/arrow_right.png';
    banner.appendChild(arrowRight);
    //console.log('Arrow right created: ', arrowRight);

    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.setAttribute("data-index", index)
        dotsContainer.appendChild(dot);
        //console.log('dot created :', dot);
    });

    const imgBanner = document.createElement("img");
    imgBanner.classList.add("banner-img");
    imgBanner.setAttribute("alt", "Banner Print It");
    banner.appendChild(imgBanner);
    //console.log('imgBanner created : ', imgBanner);

    const txtBanner = document.createElement("p");
    banner.appendChild(txtBanner);
    //console.log('txtBanner created :', txtBanner);
};

export { createElements };