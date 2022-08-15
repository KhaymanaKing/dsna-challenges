function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}


test("array push", () => {
    const arr = ['a', 'b', 'c'];
    const newLength = push(arr, 'd');
    expect(arr).toEqual(['a', 'b', 'c', 'd'])
    expect(newLength).toBe(4);
}); 

function unshift(arr, item) {
   for(let i = arr.length; i > 0; i --){
    arr[i] = arr[i-1];
   }
   arr[0] = item;
   return arr.length;
}

test("array unshift", () => {
    const arr = ['a', 'b', 'c'];
    const newLength = unshift(arr, 'd');
    expect(arr).toEqual(['d', 'a', 'b', 'c'])
    expect(newLength).toBe(4);
}); 

function pop(arr) {
    const x = arr.length = arr.length - 1
    return x;
}

test("array pop", () => {
    const arr = ['a', 'b', 'c'];
    const newLength = pop(arr);
    expect(arr).toEqual(['a', 'b'])
    expect(newLength).toBe(2);
}); 

function shift(arr) {
for( let i = 1; i < arr.length; i ++) {
    arr[i] = arr[i-1]
};
return arr[0] ;
}

test("array shift", () => {
    const arr = ['a', 'b', 'c'];
    expect(shift(arr)).toEqual('a');
});

function hasDuplicates(arr) {
    const acc = {}; // sets blank object
    for (let i = 0; i < arr.length; i++){ // this is the loop through the array
    if (!acc[arr[i]]){ // if there is no item already seen in the array
        acc[arr[i]] = 1; // set the item count to 1 saying it hasn't been seen
    } else {
        return true; // if it has been seen before return true
    } 
    } 
    return false; // if it hasn't been seen return false
}

test('has duplicates', () => {
    expect(hasDuplicates(['j', 'o', 'w', 'w'])) .toBe(true);
    expect(hasDuplicates(['m', 'b', 'p', 'x'])) .toBe(false);
})