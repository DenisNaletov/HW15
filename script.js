// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){
    return dst.splice(dstPos, dstPos, ...src.slice(srcPos, length+1))
}
function count(array, str){
    return array.filter(value => value === str).length
}
function displayOccurrences(array){
    console.log(array.reduce((arrRes, i) => {
        if (arrRes.hasOwnProperty(i)) {
            arrRes[i] += 1
        } else {
            arrRes[i] = 1
        }
        return arrRes},{})
    )
}

function ulSurround(strings){
    const mark_array = strings.map(function (item, index) {
        let mark_section =
            `<ul>
                <li>${item}</li>
            </ul>`;
        return mark_section

    });
    return mark_array;
}
function lengthSort(array){
    //TODO implement here
}
