const bioElement = document.getElementById("bio");
const showMoreButton = document.getElementById("Show-more");


const fullBio = "I am a software engineer and full stack web developer <br>with an experience in web design and maintaining   <br> systems,evaluating and testing of new software <br> programs and optimizing software for speed and scalability";

bioElement.style.display = "none";

showMoreButton.addEventListener("click",function(){
    if(bioElement.style.display==="none"){
        bioElement.innerHTML=fullBio;
        bioElement.style.display="block";
        showMoreButton.textContent="Show Less";
    } else{
        bioElement.style.display= "none";
        showMoreButton.textContent= "Show More"
    }
}) 


// Event listener for the submit button
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const nameInput = document.querySelector(".reachout input[placeholder='Your Name']");
  const emailInput = document.querySelector(".reachout input[placeholder='Your Email']");
  const messageInput = document.querySelector(".reachout input[placeholder='Message']");
  
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields");
    return;
  }
  

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
