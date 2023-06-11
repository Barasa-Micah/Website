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