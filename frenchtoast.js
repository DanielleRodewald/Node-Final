 const apiURL = "https://api.spoonacular.com/recipes/1095748/information?apiKey=b648205400054561896d3e37dd4c6bcc&includeNutrition=true."
fetch (apiURL)
.then((response) => response.json())
.then((movieInfo)=> {
   console.log(movieInfo);
 
document.getElementById("title").innerHTML= movieInfo.title;
document.getElementById("summary").innerHTML= movieInfo.summary;
document.getElementById("instructions").innerHTML=movieInfo.instructions;
document.getElementById("readyIn").innerHTML=movieInfo.readyInMinutes;
document.getElementById("servings").innerHTML=movieInfo.servings;
 
const iconcodeTwo = movieInfo.image;
document.getElementById("poster").src= iconcodeTwo;
}
);
