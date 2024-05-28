let no = document.querySelector('.no');
let nub = localStorage.getItem("productNo");
let number =JSON.parse(nub)
console.log(no)
no.setAttribute('data', number);


let cardsAll = document.querySelectorAll('.js-cards');

cardsAll.forEach( item => {
    item.addEventListener("click", (eo) =>{
        let imgg = eo.target.parentElement.getElementsByTagName("img")[0].src;
        let titlee = eo.target.parentElement.getElementsByTagName("h2")[0].innerText;
        let pricee = Number(eo.target.parentElement.querySelectorAll(".new")[0].innerText.replace("$",""));
        localStorage.setItem('imgg', imgg);
        localStorage.setItem('titlee', titlee);
        localStorage.setItem('pricee', pricee);
        window.location.href = "../htmlP/item.html"
    })

});
