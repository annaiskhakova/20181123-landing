
const openMenu = document.querySelector ("#openMenu");
const closeMenu = document.querySelector ("#closeMenu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

openMenu.addEventListener("click", function(e) {
    e.preventDefault();

        nav.style.display = "flex";
        closeMenu.style.display = "flex";
        openMenu.style.display = "none";
      
 
});

closeMenu.addEventListener("click", function(e) {
  e.preventDefault();

  

      nav.style.display = "none";
      closeMenu.style.display = "none";
      openMenu.style.display = "flex";
  

 

});

// header.addEventListener("click", function(e) {
//     e.preventDefault();

//     if (nav.style.display = "flex") {
//         nav.style.display = "none";
//         }
   
// });

// const pointsUl = document.querySelector(".points__ul");
// const number = pointsUl.children.length;

// console.log(pointsUl.children.length);

// for ( 
// var a = 0;
// a < number;
// a++ 
// )
// console.log( a + 1 );

// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");
// const computed = getComputedStyle(items);
// const step = parseInt(getComputedStyle(items.firstElementChild).width);
// const size = items.children.length - 3;
// const maxRight = step * size;

// const minRight = 0;

// let currentRight = 0;

// items.style.right = currentRight;


// right.addEventListener("click", function(e) {
//  e.preventDefault();

//  if (currentRight < maxRight) {
//   currentRight += step;
//   items.style.right = currentRight + "px";
// }  else {
//   currentRight = 0;
//   items.style.right = 0;
// }
// });


// left.addEventListener("click", function(e) {
//     e.preventDefault();

//   if (currentRight > minRight) {
//     currentRight -= step;
//     items.style.right = currentRight + "px";
//   } else {
//       currentRight = maxRight;
//       items.style.right = currentRight + "px";
//     }
// });

   
