let red = "#ff4d4d";
let orange = "#ffaf40";
let green = "#32ff7e";
let purple = "#7d5fff";
let gray = "#4b4b4b";

// Elemento a buscar
let elementSearch = new Element(document.getElementById("element"));

// Lista de elementos al buscar
let elements = [];

// Crea un objeto element por cada elemento en el doom
Array.from(document.getElementById("list").children).forEach((e) => {
    elements.push(new Element(e)) 
});

// Algoritmo de busqueda binaria
async function binarySearch(elements, pointer) {
    let low = elements[0];
    let mid = elements[Math.floor(elements.length / 2)];
    let high = elements[elements.length - 1];
    let found = false;

    console.log(pointer.value)
    while(!found) {
        await low.changeColor(purple)
        await mid.changeColor(orange)
        await high.changeColor(purple)
        await pointer.changeColor(orange)
        await mid.animate(true);

        if (low.value == pointer.value) {
            found = true;
            await mid.animate(false)
            await mid.changeColor(gray)
            await low.animate(true)
            await low.changeColor(green);
            await pointer.changeColor(green);
        };

        if (high.value == pointer.value) {
            found = true;
            await mid.animate(false)
            await mid.changeColor(gray)
            await high.animate(true)
            await high.changeColor(green);
            await pointer.changeColor(green);
        };

        if (mid.value == pointer.value) {
            found = true;
            await mid.changeColor(green);
            await pointer.changeColor(green);
        };

        if (mid.value > pointer.value) {
            await pointer.changeColor(red)
            await mid.changeColor(red)
            await pointer.changeColor(gray)
            await mid.changeColor(gray)
            await mid.animate(false);
            await high.changeColor(gray);
            high = mid
            mid = elements[Math.floor(high.value / 2)]
        }else if(mid.value < pointer.value){
            await pointer.changeColor(red)
            await mid.changeColor(red)
            await pointer.changeColor(gray)
            await mid.changeColor(gray)
            await mid.animate(false);
            await low.changeColor(gray)
            low = elements[mid.value]
            mid = elements[mid.value + Math.floor((high.value - mid.value) / 2)]
        };
    };

    return alert("Found!")
};

binarySearch(elements, elementSearch)