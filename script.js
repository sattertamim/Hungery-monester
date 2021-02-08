const searchFood = () =>{
    const a = document.getElementById('searchField').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${a}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}
   const displayFood = foods => {
       const foodContainer = document.getElementById('food-container');
     foods.forEach(food => {
         const foodDiv = document.createElement('div');
         foodDiv.className = 'card';
         foodDiv.innerHTML = `
             <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">${food.strInstructions}</p>
                  <button id="ingrads-btn" onclick="getIngradience('${food.strMeal}')" href="#" class="btn btn-primary"> Get Ingradience</button>
                </div>
         `;
         foodContainer.appendChild(foodDiv);
     });
   }

   const getIngradience = (ingradience) =>{
       const ingradiences = document.getElementById('ingrads-btn').value;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingradiences}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayIngradience(data.meals));
     
   }

   const displayIngradience = getingradiance => {
    const ingradianceContainer = document.getElementById('allIngradiance');
  getingradiance.forEach(ingrad => {
      const ingradDiv = document.createElement('div');
      ingradDiv.className = 'card';
      ingradDiv.innerText = `
          <img src="${ingrad.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
               <h4 class="card-title">${ingrad.strMeal}</h4>
               <h6>${ingrad.strIngredient1}</h6>
               <h6>${ingrad.strIngredient2}</h6>
               <h6>${ingrad.strIngredient3}</h6>
               <h6>${ingrad.strIngredient4}</h6>
               <h6>${ingrad.strIngredient5}</h6>
               
             </div>
      `;
      ingradianceContainer.appendChild(ingradDiv);
  });
}

//   <h6>${ingrads.strIngredient6}</h6>
// <h6>${ingrads.strIngredient7}</h6>
// <h6>${ingrads.strIngredient8}</h6> 
// <h6>${ingrads.strIngredient9}</h6>





