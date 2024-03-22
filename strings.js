let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index)

let text2 = "Please locate where 'locate' occurs!";
let index2 = text2.lastIndexOf("locate");
console.log(index2)

const tex = "Please locate where 'locate' occurs!";
console.log(tex.search("locate"))

let text4 = "The rain in SPAIN stays mainly in the plain";

console.log(text4.match("ain"))
console.log(text4.match(/ain/g))
console.log(text4.match(/ain/gi))//for a global search

const text5 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text5.matchAll("Cats");
console.log(Array.from(iterator))

// search methods
let text6 = "Hello world, welcome to the universe.";//how tosearch if a word is incluced at agiven index
//text6.includes("world")
console.log(text6.includes("world",12))// search for world starting at 12

console.log(text6.includes("world",0))//search for world starting at zero

//needd to add examples for startsWith
let text7 = "Hello world, welcome to the universe."; 
//text.startsWith("Hello");
console.log(text.startsWith("Hello"))


//need to add examples endWith


let text8 = `He's often called "Johnny"`;
const text9=
`
My
name
is Racheal
`
// variables dont deal with "" and also''


//create an object and return a statement like "my name is"
const fruit={
    name:{firstName:"mango",secondName:"muyebe"},
    colouRipe:"yellow",
    nutrient:"vitamin"
  }


const fruitInfor = 'My name is ' + fruit.name.firstName + ' ' + fruit.colouRipe + ' ' + fruit.nutrient;

console.log(fruitInfor);



