let inputBox = document.querySelector('#inputTxt');
let btnSearch = document.querySelector('#btnSearch');

btnSearch.addEventListener('click', () => {
    let inputVal = inputBox.value;

    if (inputVal == "") {
        alert("Enter Recipe Name First");
        div.style.display = "none";
    }
    console.log(inputVal);
    const div = document.getElementById('meal-container');
    div.innerHTML = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);

            data.meals.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.classList.add('meal');
                mealDiv.innerHTML = `<h3>${meal.strMeal}</h3> <img src="${meal.strMealThumb}">
            <p>${meal.strInstructions}</p>`;
                div.appendChild(mealDiv);
            })
        })
        .catch(err => console.log(err));
});