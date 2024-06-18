//qq1
//new Set([1,1,2,2,3,4]) // returns [1,2,3,4]

//qq2
//[...new Set("referee")].join("") // returns "ref"

//qq3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//Map size of 2. { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }
const hasDuplicate = (arr) => {
    return arr == new Set(arr);
}

const vowelCount = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let m = new Map();
    let sarr = Array.from(s);

    sarr.forEach( val => {
        if (vowels.includes(val)) {
            if (m.has(val)) {
                m.set(val, m.get(val) + 1);
            }
            else {
                m.set(val, 1);
            }
        }
    });

    return m;
    
}
