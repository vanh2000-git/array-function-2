// BAI1
let array = [[1, 2, 3, 4],
    [5,6,7,8], [9,10,11,12], [13,14,15,16]];
for (let i = 0; i < array.length; i++) {
    console.log("row" + i);
    for (let j = 0; j < array.length; j++) {
        console.log("" + array[i][j]);
    }
}
// BAI2
let array1 = [ 'c', 's', 'c', '2', '6', '1' ];
console.log(array1.reverse());
// BAI3
let array2 = [ 'c', 's', 'c', '2', '6', '1', '1'];
let count = 0;
for (let k = 0; k < array2.length; k++) {
    if (!isNaN(array2[k])){
        count++;
    }
}
console.log(`số ký tự số trong mảng là ${count}`);
// BAI4
let array3 = [];
for (let m = 0; m < 10; m++) {
    array3[m] = prompt(`điền vị trí thứ ${m} vào mảng`);
}
let count1 = 0;
for (let l = 0; l < array3.length; l++) {
    if (!isNaN(array3[l])){
        count1++;
    }
}
console.log(`số ký tự số trong mảng là ${count1}`);
// BAI5
function checkStringsEqual() {
    let string1 = prompt("Nhập chuỗi thứ nhất: ");
    let string2 = prompt("Nhập chuỗi thứ hai: ");

    if (string1 === string2) {
        console.log("Hai chuỗi giống nhau.");
    } else {
        console.log("Hai chuỗi không giống nhau.");
    }
}
checkStringsEqual();
// BAI6
function replaceHyphens() {
    let input = prompt("Nhập một chuỗi ký tự (có thể có ký tự '-'): ");
    let charArray = input.split('');
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] === '-') {
            charArray[i] = '_';
        }
    }
    console.log("Mảng sau khi thay thế:", charArray.join(''));
}
replaceHyphens();