let no = document.querySelector('.no');
let nub = localStorage.getItem("productNo");
let number =JSON.parse(nub)
console.log(no)
no.setAttribute('data', number|"0");


let btn = document.querySelectorAll('.add-cart');
// let no = document.querySelector('.no');

let products = [];
let productNo = 0;

btn.forEach( item => {
    item.addEventListener("click", (eo) =>{
        let img = eo.target.parentElement.getElementsByTagName("img")[0].src;
        let title = eo.target.parentElement.getElementsByTagName("h2")[0].innerText;
        let price = Number(eo.target.parentElement.querySelectorAll(".new")[0].innerText.replace("$",""));
        localStorage.clear();
        products.push({img,title,price});
        productNo = products.length;
        localStorage.setItem("productNo",JSON.stringify(productNo));
        localStorage.setItem('products',JSON.stringify(products));
        let nub = localStorage.getItem("productNo");
        no.setAttribute('data', nub|"0");
        eo.target.remove();
    })

});
