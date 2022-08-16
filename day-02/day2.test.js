function filter(arr, predicate) { 
const filtered = [];
for(let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if(predicate(item)) filtered.push(item);
}
return filtered;
}

test('it should filter', () => {
    expect(filter([2, 6, 5], n => n % 2 === 0)).toEqual([2, 6])
})

function map(arr, callback) {
    const mapped = [];
    for(let i = 0; i < arr.length; i++) {
        const transformed = callback(arr[i]);
        mapped.push(transformed);
    }
    return mapped;
 }

test('it should map', () => {
    expect(map([1, 6, 5], n => n**2)).toEqual([1, 36, 25])
})


// function every(arr, predicate){
//     for (let i = 0; i < arr.length; i++){
//         const item = arr[i];
//     }
// }
// test('every true', () => {
//     expect(every([2, 6, 10], (n) => n % 2 === 0)).toBe(true);
// })
function rootDigit(n) {
    if (n < 10) return n;
    const digits = n.toString().split('');
    const numbers = digits.map(d => +d);
    const sum = numbers.reduce((a, b) => a + b);
    return sum >  10 ? rootDigit(sum) : sum;
}

test('rootDigit test', () => {
    expect(rootDigit(123)).toEqual(6);
    expect(rootDigit(4322)).toEqual(2);
    expect(rootDigit(999888777)).toEqual(9);
})



function addFirst (element){
    return function addItem(arr) {
        return [element, ...arr];
    }
   
}

test('adding',  () => {
    const addOrange = addFirst('orange');
    const addCat = addFirst('cat');
    expect(addOrange(['red', 'blue', 'green'])).toEqual(['orange', 'red', 'blue', 'green']);
    expect(addCat(['dog', 'bird', 'lizard'])).toEqual(['cat', 'dog', 'bird', 'lizard'])
})

function addPunctuation (element){
    return function addItem(string) {
        return string + element;
    }
   
}

test('adds punctuation', () => {
    const addExcitement = addPunctuation('!!!');
    const addUnsure = addPunctuation('?!?');
    expect(addUnsure('Hello World')).toBe('Hello World?!?');
    expect(addExcitement('Hello World')).toBe('Hello World!!!')
})