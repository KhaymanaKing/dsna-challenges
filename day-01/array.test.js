function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

function unshift(arr, item) {
   arr[]
}

test("array push", () => {
    const arr = ['a', 'b', 'c'];
    const newLength = push(arr, 'd');
    expect(arr).toEqual(['a', 'b', 'c', 'd'])
    expect(newLength).toBe(4);
}); 


