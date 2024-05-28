// Open card in item content
let imgFromLocal = localStorage.getItem("imgg")
let titleFromLocal = localStorage.getItem("titlee")
let priceFromLocal = localStorage.getItem("pricee")

let item = `            
    <div class="product_imagesss">
        <div class="imageeeeee"><img src="${imgFromLocal}" alt="" /></div>
        </div>

        <div class="product_desc">
        <h2>${titleFromLocal}</h2>

        <div class="revvv">
            <img src="../img/Four Star.png" alt="" />
            <p>(150 Reviews) | <span>In Stock</span></p>
        </div>

        <p class="pric_e" id="pric_e">$${priceFromLocal}.00</p>
        <p class="des_c">${titleFromLocal} One of our best products at the cheapest price</p>
        <hr />

        <div class="btns_size">
            <p>Size:</p>
            <button onclick="xs()" id="xs" class="btn_small">XS</button>
            <button onclick="s()" id="s" class="btn_small">S</button>
            <button onclick="m()" id="m" class="btn_small">M</button>
            <button onclick="l()" id="l" class="btn_small">L</button>
            <button onclick="xl()" id="xl" class="btn_small">XL</button>
        </div>

        <div class="controllllls">
            <div class="incre_decre">
                <button onclick="decre()" class="decreee">-</button>
                <p id="resulttt">1</p>
                <button onclick="incre()" class="increee">+</button>
            </div>

            <button class="buy_nowww " id="randomhearts">Buy Now</button>

            <input type="checkbox" name="" id="heartt" />
            <label for="heartt" class="hearttt"><i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-heart"></i></label>
        </div>

        <div class="deliveryy">
            <div class="parttt">
                <i class="fa-solid fa-truck-fast"></i>
                <div class="txt">
                    <p>Free Delivery</p>
                    <a href="#postal">Enter your postal code for Delivery Availability</a>
                </div>
            </div>
            <hr />
            <div class="parttt">
                <i class="fa-solid fa-arrows-rotate"></i>
                <div class="txt">
                    <p>Return Delivery</p>
                    <span>Free 30 Days Delivery Returns.<a href="#postal">Details</a></span>
                </div>
            </div>
        </div>
    </div>`;
let parent = document.querySelectorAll(".product_infor")[0];

function remove_style_btn() {
    for (let i of document.getElementsByClassName("btn_small")) {
        i.style.backgroundColor = "transparent";
        i.style.color = "black";
    }
}

function style_btn(id) {
    remove_style_btn();

    let button = document.getElementById(id);
    button.style.backgroundColor = "#c43434";
    button.style.color = "#ffffff";
}

function xs() {
    style_btn("xs");
}
function m() {
    style_btn("m");
}
function s() {
    style_btn("s");
}
function l() {
    style_btn("l");
}
function xl() {
    style_btn("xl");
}

let x = 1;
function incre() {
    x += 1;
    document.getElementById("resulttt").innerHTML = x;
    document.getElementById("pric_e").innerHTML = `$${x * priceFromLocal}.00`;
}
function decre() {
    if (x > 1) {
        document.getElementById("resulttt").innerHTML = x -= 1;
        document.getElementById("pric_e").innerHTML = `$${x * priceFromLocal}.00`;
    }
}
parent.innerHTML = item;


// Heart onClick btn buy now
const randomHearts = () => {
    const parentHeart = document.createElement("div");
    containerheart.append(parentHeart);
    const createRandomHeart = setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "&#128151;";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s   `;
        const heart2 = document.createElement("div");
        heart2.classList.add("heart");
        heart2.innerHTML = "&#128525;";
        heart2.style.left = `${Math.random() * 100}%`;
        heart2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s   `;
        parentHeart.append(heart);
        parentHeart.append(heart2);
    }, 50);
    setTimeout(() => {
        clearInterval(createRandomHeart);
    }, 2000);
    setTimeout(() => {
        parentHeart.remove();
    }, 5000);
}
randomhearts.addEventListener("click", (eo) => {
    randomHearts()
});
