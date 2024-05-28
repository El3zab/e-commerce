let no = document.querySelector('.no');
let nub = localStorage.getItem("productNo");
let number =JSON.parse(nub)
console.log(no)
no.setAttribute('data', number|"0");


let prod =localStorage.getItem("products");
product=JSON.parse(prod)
console.log(product)

const category = [...new Set(product.map((item) => item))]
console.log(category)
let produ = document.querySelector(".products");
console.log(produ)
produ.innerHTML=category.map(item=>{
    var {img,title,price} = item ;
    return(
        `
        <div class="box">
            <div class="img">
                <img src="${img}" alt="" />
                <span>${title}</span>
            </div>
            <span>$${price}</span>
        </div>`
    )
}).join('')

let totalap = document.getElementsByClassName("totalOne")[0];
let totalapp = document.getElementsByClassName("totalTwo")[0];
let total = localStorage.getItem('tot')
// let total = JSON.parse(tot)
console.log(total)
totalap.innerText = total
totalapp.innerText = total

// let produc =`<div class="box">
// <div class="img">
//     <img src="../img/Frame 611.png" alt="" />
//     <span>LCD Monitor</span>
// </div>
// <span>$650</span>
// </div>
// <div class="box">
// <div class="img">
//     <img src="../img/Frame 613.png" alt="" />
//     <span>H1 Gamepad</span>
// </div>
// <span>$1100</span>
// </div>`
