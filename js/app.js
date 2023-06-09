const addDog=document.querySelectorAll(".dog");
const message=document.getElementById("message")
const submitDog=document.getElementById("submit-dog");

console.log(addDog)
const newDog={}
submitDog.addEventListener("click",function(e){
    e.preventDefault();
    addDog.forEach(function(element){
        if(element.value===""){
            element.classList.add("error")
            message.textcontent="please fill the all the fields"
            message.classList.add("error-message")
            return;
        }
        else{
            element.classList.remove("error")
            message.classList.remove("error")
            message.textContent=""
            newDog.dogName=addDog[0].value,
            newDog.dogprice=addDog[1].value,
            newDog.dogBreed=addDog[2].value,
            newDog.dogAge=addDog[3].value,
            newDog.dogimage=addDog[4].files[0].name,
            newDog.dogDescription=addDog[5].value

        }
    })
})
