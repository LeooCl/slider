class Slider {
  constructor(params) {
    this.images = params.images;
    this.currentImageIndex = 0;
    this.area = document.querySelector(params.area);
    this.width = params.width;
    this.height = params.height;

    this.createSlider();
    this.addButtons();
    this.affichageImages();
  }

  createSlider() {
    this.sliderContainer = document.createElement("div");
    this.sliderContainer.style.width = this.width;
    this.sliderContainer.style.height = this.height;
    this.sliderContainer.style.overflow = "hidden";

    this.imageElement = document.createElement("img");

    this.sliderContainer.appendChild(this.imageElement);
    this.area.appendChild(this.sliderContainer);
  }
  addButtons() {
    // Bouton previous
    this.buttonPrevious = document.createElement("button");
    this.buttonPrevious.textContent = "Previous";
    this.area.appendChild(this.buttonPrevious);
    this.buttonPrevious.addEventListener("click", () => {
      this.previous();
    });

    // Bouton next
    this.buttonNext = document.createElement("button");
    this.buttonNext.textContent = "Next";
    this.area.appendChild(this.buttonNext);
    this.buttonNext.addEventListener("click", () => {
      this.next();
    });
  }

  affichageImages() {
    this.imageElement.src = this.images[this.currentImageIndex].src;
    this.imageElement.alt = this.images[this.currentImageIndex].title;
  }

  next() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

    this.affichageImages();
    console.log(this.currentImageIndex);
  }

  previous() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;

    this.affichageImages();
    console.log(this.currentImageIndex);
  }
}

export { Slider };
