// let h1 = document.querySelector("h1");

// let inc = document.getElementById("inc");
// let dec = document.getElementById("dec");
// let res = document.getElementById("res");

// let a = 0;
// inc.addEventListener("click", () => {
//   a++;
//   h1.innerHTML = a;
// });

// dec.addEventListener("click", () => {
//   a--;
//   h1.innerHTML = a;
// });

// res.addEventListener("click", () => {
//   a = 0;
//   h1.innerHTML = a;
// });

// let r = Math.floor(Math.random() * 255);
// let b = Math.floor(Math.random() * 255);
// let g = Math.floor(Math.random() * 255);

// let body = document.querySelector("body");

// body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

// console.log(r);
// console.log(g);
// console.log(b);

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let h1 = document.createElement("h1");
//   h1.innerHTML = "Hello from js";
//   let body = document.querySelector("body");
//   body.appendChild(h1);
// });

let btn = document.querySelector("button");
let main = document.querySelector("main");

let arr = [
  "Hey! I am Sarthak",
  "Sheryians is best",
  "Deepak is great developer",
  "Jai Shree Sita Ram",
];

btn.addEventListener("click", () => {
  let h1 = document.createElement("h1");
  let a = Math.floor(Math.random() * arr.length);

  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let rd = Math.floor(Math.random() * 360);
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let sc = Math.floor(Math.random() * 3);

  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = r + "deg";
  h1.style.scale = sc;
  h1.style.color = `rgb(${r}, ${g}, ${b})`;
  h1.innerHTML = arr[a];
  main.appendChild(h1);
});
