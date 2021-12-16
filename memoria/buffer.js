// const buffer = Buffer.alloc(4);
// const buffer = Buffer.from([1,2,3,4]);
// const buffer = Buffer.from('Hola');
// console.log(buffer.toString());

// --
const abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++){
    abc[i] = i + 97;
}

console.log(abc.toString())
