let array = [-2, -3, 4, -1, -2, 1, 5, -2]
let current = array[0];

let max = array[0]

let start = 0;
let end = 0;
let tempStart = 0

for (let i = 0; i < array.length; i++) {

    if (array[i] > current + array[i]) {
        tempStart = i;
        current = array[i]
    }
    else {
        current = current + array[i]
    }

    if (current > max) {
        max = current;
        start = tempStart;
        end = i
    }
}

let highsum_Array = array.slice(start, end + 1)

console.log("Maximun Sum of Array = ",max);
console.log("Array Which Sum Is High = ",highsum_Array);

