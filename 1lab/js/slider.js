(function(){
    window.Slider = function Slider(id){
        let sliderContainer = document.getElementById(id);
        let sliderElem = document.createElement("ul");
        sliderElem.classList.add("slider");
        sliderContainer.appendChild(sliderElem);

        let slides = []; 
        let currentSlide = 0; 
        
        this.add = function (imgPath, alt) {
            let li = document.createElement("li");
            let image = document.createElement("img");
            image.setAttribute("src", imgPath);
            image.setAttribute("alt", alt);
            li.appendChild(image);
            sliderElem.appendChild(li);

            slides.push(li);
        };
        
        this.run = function () {
            this.nextSlide();
            setInterval(this.nextSlide.bind(this), 5000);
        }
        
        this.nextSlide = function () {
            slides[currentSlide].classList.remove("active");
            currentSlide += 1;
            
            currentSlide = currentSlide < slides.length ?
                currentSlide : 0;

            slides[currentSlide].classList.add("active");
        }
    }
}());