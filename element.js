class Element {
    constructor(element) {
        this.properties = element;
        this.value = parseInt(this.properties.textContent);
    };

    // Anima la seleccion del elmento
    async animate(isAnimating) {
        if(isAnimating) {
            this.properties.style.transform = "scale(1.3) translateY(-30px)";
        }else{
            this.properties.style.transform = "scale(1) translateY(0)";
        };

        await new Promise(resolve => setTimeout(resolve, 300));
    };
    
    // Cambia los colores del elemento
    async changeColor(color) {
        this.properties.style.borderColor = color;
        this.properties.style.color = color;

        await new Promise(resolve => setTimeout(resolve, 300));
    };
};