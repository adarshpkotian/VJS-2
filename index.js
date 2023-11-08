
let circles = document.querySelectorAll(".circle");
let result = document.getElementById("result")

let executed = false;

circles.forEach(circle => { circle.addEventListener("click", function() {
    
    circles.forEach(c => c.classList.remove("active"));
    this.classList.add("active");
    let resultNum=this.id;
    result.innerHTML = resultNum;
    
    if (executed) {
        return false;
      } else {
        executed = true;
        return true;
      }

  });
});


let button = document.querySelector("button");
let ratingState = document.querySelector(".rating-state");
let thankYouState = document.querySelector(".thank-you-state");

button.addEventListener("click", function() {
  if(executed){
  ratingState.classList.add("hide");
  thankYouState.classList.remove("hide");
}
 
});
