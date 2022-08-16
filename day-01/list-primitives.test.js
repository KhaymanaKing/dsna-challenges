function  multiplesOfN(n){
    const nArr = []
 for(let i = n; i <= 50; i+= n){
    nArr.push(i)
 }
 return nArr;
}

test('multiplesOfN', () => {
    expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    expect(multiplesOfN(25)).toEqual([25, 50]);
    expect(multiplesOfN(75)).toEqual([]);
})

function reverseWords(sentence) {
 return sentence
 .split(" ")
 .map((word) => {
    return word.split("").reverse().join("");
 })
 .join(" ");
}

test('reverseWords', () => {
    expect(reverseWords('alchemy rocks gold')).toEqual('ymehcla skcor dlog');
})

function titleCase(sentence) { 

}

test('titleCase', () => {
    expect(titleCase('alchemy ROCKS goLD')).toEqual('Alchemy Rocks Gold')
})