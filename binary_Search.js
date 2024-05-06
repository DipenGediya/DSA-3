let array = [1, 3, 5, 7, 10, 17]


let binary = (array, element, start, end) => {

    let mid = Math.floor((start + end) / 2);

    if (start > end) {
        return false;
    }

    if (array[mid] === element) {
        return true;
    }

    if (array[mid] > element) {
        return binary(array, element, start, mid - 1);
    }
    else {
        return binary(array, element, mid + 1, end);
    }
}

let result = binary(array, 17, 0, array.length);

console.log(result);