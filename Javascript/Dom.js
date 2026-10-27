//! Document Object Model :
// It is a tree like representation of our HTML document.
// Here each tag is known as Node.
// DOM is responsible for making our Webpage Interactive and dynamic.

// //! DOM Selectors :- 

// //! 1) document.getElementById("")

// let ele1 = document.getElementById("box");
// console.log(ele1);
// ele1.style.backgroundColor = "yellow";

// //! 2) document.getElementsByClassName("")

// let containers = document.getElementsByClassName("container");
// console.log(containers);

// //! HTML Collection is an Impure Array.
// console.log(Array.isArray(containers));

// //! 3) document.getElementsByTagName("")

// let elements = document.getElementsByTagName("div");
// console.log(elements);

// //! 4) document.querySelector("")
// // Priority = id > class > tagname

// let ele2 = document.querySelector("div, #box, .container");
// console.log(ele2);

// //! 5) document.querySelectorAll("")

// let val = document.querySelectorAll("div");
// console.log(val);

// //! Node list is an Impure Array.
// console.log(Array.isArray(val));

//! DOM MANIPULATION

// const - primitive type data
// let - non primitive type data 
const mainTag = document.querySelector("#main-container");

const h3tag = document.createElement("h3"); // Create empty <h3></h3>

const para = document.createElement("p");

const atag = document.createElement("a");

atag.href = "https://www.myntra.com";

atag.target = "_blank";

h3tag.textContent = "Hello World"; // Add data in tag.

para.innerHTML = "It a <em> Paragraph containing <em> long format."

atag.textContent = "Myntra";

console.log(h3tag);

console.log(para);

console.log(atag);


//appendChild - one argument at a time
mainTag.append(h3tag, para, atag); // append - multiple arguments input.