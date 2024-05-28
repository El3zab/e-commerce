
let no = document.querySelector('.no');
let nub = localStorage.getItem("productNo");
let number =JSON.parse(nub)
console.log(no)
no.setAttribute('data', number|"0");




let products =localStorage.getItem("products");
let product=JSON.parse(products)
console.log(product)

// localStorage.setItem('product',product);

const category = [...new Set(product.map((item) => item))]
console.log(product)
let table = document.querySelector(".table");
table.innerHTML=category.map(item=>{
    var {img,title,price} = item ;
    return(
        `
        <tr>
            <td>
                <div class="product">
                    <img src="${img}" alt="">
                    <span>${title}</span>
                </div>
            </td>
            <td class="price">${price}</td>
            <td><input type="number" placeholder="1" min="1" value="1" class="qunt"></td>
            <td class="last-td total">${price}</td>
        </tr>`
    )
}).join('')

let tablee = document.querySelectorAll(".table");
let totalCartOne = document.getElementsByClassName("cart-total")[0]
console.log(totalCartOne)
let totalCartTwo = document.getElementsByClassName("cart-total")[1]
let clear = document.getElementsByClassName('ubdate')[0]
let arr=[];
// console.log(input)
tablee.forEach(item => {
    item.addEventListener("click", (eo) => {
        let tdd = eo.target.parentElement.getElementsByClassName("total")[0];
        let input = eo.target.getElementsByClassName("qunt")[0].value;
        console.log(input);
        // let input = eo.target.value;
        console.log(input)
        console.log(tdd)
        let price = eo.target.parentElement.getElementsByClassName("price")[0].innerText;
        // console.log(typeof(price))
        var totprice = +input * +price;
        console.log(totprice)
        tdd.innerHTML=totprice;
        // arr.push(totprice) 
        // console.log(arr)
        // localStorage.setItem("total",JSON.stringify(arr))
        let total = document.querySelectorAll(".total");
        console.log(total)
        let tot = 0;
        for (let index = 0; index < total.length; index++) {
            let inner = +total[index].innerText;
            tot += inner ;
        }
        // localStorage.setItem("total",tot)
        console.log(tot)
        totalCartOne.innerHTML=tot
        totalCartTwo.innerHTML=tot
        localStorage.setItem("tot",tot);
    })
})

// let sum = document.getElementsByClassName("cart-total")[1].innerText
// localStorage.setItem("tot",sum);
clear.addEventListener("click", ()=> {
    table.remove();
    totalCartOne.innerText = 0;
    totalCartTwo.innerText = 0;
    localStorage.clear();
    no.setAttribute('data', "0");
    productNo = 0;
    localStorage.setItem("productNo",JSON.stringify(productNo));
})


let goInfo = document.getElementsByClassName('go-info')[0];
goInfo.addEventListener("click",()=>{
    window.open("../htmlP/info.html")
})





