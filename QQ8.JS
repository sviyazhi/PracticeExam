//Q8
function calculateHypotenuse(adjacent, opposite) {
    return Math.sqrt(adjacent * adjacent + opposite * opposite);
}


let hypotenuse = calculateHypotenuse(3, 4);
console.log("Hypotenuse:", hypotenuse);