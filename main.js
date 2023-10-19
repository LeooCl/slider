class Slider {
    constructor(params) {
        this.images = params.images;
        this.width = params.width || '100%';
        this.height = params.height || '100%';
        this.area = document.querySelector(params.area);
        
        this.renderSlider();
    }

    renderSlider() {

        this.slider = document.createElement("div");
        this.slider.className = "slider";
        this.slider.style.width = this.width;
        this.slider.style.height = this.height;
        this.area.append(this.slider);

    }

    // addButton() {
    //     this.prevButton = document.createElement("button");
    //     this.prevButton.textContent = "Précedent";
    //     this.prevButton.addEventListener("click", () => this.prevButton());
    //     this.slider.appendChild(this.prevButton);
    // }

    // next() {

    // }

    // previous() {

    // }
}

const images = [
    {src: 'img/linkToThePast.jpg', title: 'A link to the Past'},
    {src: 'img/twilightPrincess.jpg', title: 'Twilight princess'},
    {src: 'img/skywordSword.jpg', title: 'Skyward Sword'},
    {src: 'img/windWaker.jpg', title: 'WindWaker'},
    {src: 'img/botw.jpg', title: 'Breath of the wild'},
    {src: 'img/linksAwakening.avif', title: 'Link\'s awakening'},
];

const params = {
    images: images,
    area: 'slider', //Selecteur CSS
    width:'100%', //optionel
    height:'100%' //optionel
};

const slider = new Slider(params);