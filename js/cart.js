const addTocart = document.querySelectorAll(".add-to-cart");
// const count=document.getElementByClass("")
const count=document.getElementById("hoover");
console.log(count)
const shoppingCart = [];
addTocart.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    if (button.textContent === "Add to Cart") {
      const cartItems = {
        dogName:
          e.target.parentElement.parentElement.children[0].children[0]
            .textContent,
        dogPrice:
          e.target.parentElement.parentElement.children[0].children[1]
            .textContent,
        dogImage:  
          e.target.parentElement.parentElement.parentElement.children[0].children[0].getAttribute("src")
            
      };
      console.log(cartItems)
      shoppingCart.push(cartItems)
      console.log(shoppingCart)

        //  console.log(cartItems)
      button.textContent = "Added to cart";

      const counter=document.createElement("div")
     shoppingCart.map(item =>{
          console.log(item)
        counter.innerHTML=`
         
          <div class="cart-items">
          <i class="fa-regular fa-circle-xmark"></i>
          <p> ${item.dogName}</p>
          <img src=${item.dogImage} width="100"> 
          <input type="number" min=1 max=10>
          <P>${item.dogPrice}</P>
          </div>`
count.appendChild(counter)
    }
    )
    }
    })
  });
