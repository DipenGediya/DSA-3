let array = [49, 17, 7, 18, 66, 21];

let element = 17;

let found = false;

for (let i = 0; i < array.length; i++) {

    if (element === array[i]) {
        console.log("Element Is In The Array");
        found = true;
        break;
    }

}
if (!found) {
    console.log("Element Is Not In The Array");
}
