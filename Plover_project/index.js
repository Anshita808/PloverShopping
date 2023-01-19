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
          
        product.append(div)
        div.append(img, title,category,price,add_to_cart);
    })
}