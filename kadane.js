let array = [49, -17, 18, 66, -21, -45, -12, 13];

let current = array[0];

let max = array[0]

for (let i = 0; i < array.length; i++) {

    current = current + array[i]
    if (current < 0) {
        current = 0
    }

    if (current > max) {
        max = current;
    }
    
}

console.log("Sum Of Array = ", max);