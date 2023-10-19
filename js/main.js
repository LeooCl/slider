const images = [
  { src: "img/linkToThePast.jpg", title: "A link to the Past" },
  { src: "img/twilightPrincess.jpg", title: "Twilight princess" },
  { src: "img/skywordSword.jpg", title: "Skyward Sword" },
  { src: "img/windWaker.jpg", title: "WindWaker" },
  { src: "img/botw.jpg", title: "Breath of the wild" },
  { src: "img/linksAwakening.avif", title: "Link's awakening" },
];

import { Slider } from './Slider.js';

const params = {
  images: images,
  area: "div.slider", //Selecteur CSS
  width: "100%", //optionel
  height: "100%", //optionel
};

const slider = new Slider(params);