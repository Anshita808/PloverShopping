let product = document.querySelector(".product");

let api = "https://fakestoreapi.com/products ";
fetch(api).then((request) => {
    return request.json();
}).then((res) => {
    console.log(res);
    Display(res)
}).catch((err) => {
    console.log(err);
})



let cart = JSON.parse(localStorage.getItem("cart"))||[];
function Display(data) {

    product.innerHTML = "";
    data.forEach((element, index) => {
      
        let div = document.createElement("div");
        div.setAttribute("class","mycard")
        let img = document.createElement("img");
        img.src = element.image;
        let category = document.createElement("h3");
        category.innerText = element.category
        let price = document.createElement("h3");
        price.innerText = `₹${element.price}`
        let title = document.createElement("h2");
        title.innerText = element.title
        let add_to_cart = document.createElement("button");
            add_to_cart.innerText = "Add to cart"
          add_to_cart.addEventListener("click",()=>{
            if(checkDuplicate(element)){
                alert("product is already added");
            }else{
                cart.push({...element,quantity:1});
              localStorage.setItem("cart",JSON.stringify(cart));
              alert("product added to cart")
            }
          })


        product.append(div)
        div.append(img, title,category,price,add_to_cart);
    })
}
function checkDuplicate(product){
       for(let i=0; i<cart.length; i++){
        if(cart[i].id === product.id){
            return true;
        }
       }return false;
}