// API docs https://www.thecocktaildb.com/api.php

async function fetchData(liquor) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
    const response = await axios.get(url)
    let loopy = response.data.drinks
    for (let i = 0; i < loopy.length; i++)
      {
        console.log(loopy[i].strDrink)
        }
    // let drinkName = (response.data.drinks[1].strDrink)
    // console.log(drinkName) 
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchData('Bourbon')


