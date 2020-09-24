// API docs https://www.thecocktaildb.com/api.php

async function fetchData(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValues(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchData('Bourbon')

//FOR EACH 
function optionValues(lists) {
  // console.log(lists)
  const select = document.querySelector('#bourbon-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 

//Brandy
async function fetchDataBrandy(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesBrandy(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataBrandy('Brandy')

function optionValuesBrandy(lists) {
  // console.log(lists)
  const select = document.querySelector('#brandy-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 


//Cognac
async function fetchDataCognac(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesCognac(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataCognac('Cognac')

function optionValuesCognac(lists) {
  // console.log(lists)
  const select = document.querySelector('#cognac-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 

//Gin
async function fetchDataGin(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesGin(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataGin('Gin')


function optionValuesGin(lists) {
  // console.log(lists)
  const select = document.querySelector('#gin-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 

//Rum
async function fetchDataRum(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesRum(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataRum('Rum')

function optionValuesRum(lists) {
  // console.log(lists)
  const select = document.querySelector('#rum-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 


//Rye
async function fetchDataRye(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesRye(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataRye('Rye Whiskey')

function optionValuesRye(lists) {
  // console.log(lists)
  const select = document.querySelector('#rye-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 

//Scotch
async function fetchDataScotch(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesScotch(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataScotch('Scotch')

function optionValuesScotch(lists) {
  // console.log(lists)
  const select = document.querySelector('#scotch-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 


//Vodka
async function fetchDataVodka(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesVodka(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataVodka('Vodka')

function optionValuesVodka(lists) {
  // console.log(lists)
  const select = document.querySelector('#vodka-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 

//Whiskey
async function fetchDataWhiskey(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    // console.log(drinkName)
    optionValuesWhiskey(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataWhiskey('Whiskey')

function optionValuesWhiskey(lists) {
  // console.log(lists)
  const select = document.querySelector('#whiskey-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 


//TARGETS THE VALUE OF THE CHANGE EVENT FOR ALL LIQUOR TYPES, RETRIEVES THE DATA AND IS THE LISTENER FOR THE USER CHANGE EVENT
function onDropDownChange(event) {
  event.preventDefault()
  const drinkId = event.srcElement.id //retrieving the object that fired the change event! Janice helped with this one. 
  const optionValue = document.querySelector(`#${drinkId}`).value
  // debugger
  console.log(optionValue)
  getDrink(optionValue)
}

//PULLING THE DRINK API DATA AND PASSING THROUGH THE APPENDED MATERIAL 
async function getDrink(drink) {

  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
  console.log(url)
  removeAll()
  try {
    const response = await axios.get(url)
    const drinkImg = response.data.drinks[0].strDrinkThumb
    const drinkName = response.data.drinks[0].strDrink
    const drinkInstructions = response.data.drinks[0].strInstructions
    const instruction = `Instructions: ${drinkInstructions}`
    
    let drinkRecipe = 'Ingredients: '
    let drinkIngredients1 = response.data.drinks[0].strIngredient1  
    let drinkMeasurements1 = response.data.drinks[0].strMeasure1
    let drinkRecipe1 = `${drinkMeasurements1} ${drinkIngredients1}`
    if (drinkRecipe1 !== 'null null') {
      drinkRecipe = `Ingredients: ${drinkRecipe1}`
    } 
    let drinkIngredients2 = response.data.drinks[0].strIngredient2
    let drinkMeasurements2 = response.data.drinks[0].strMeasure2
    let drinkRecipe2 = ` ${drinkMeasurements2} ${drinkIngredients2} `
    if (drinkRecipe2 !== ' null null ') {
      drinkRecipe += drinkRecipe2
    }

    let drinkIngredients3 = response.data.drinks[0].strIngredient3
    let drinkMeasurements3 = response.data.drinks[0].strMeasure3
    let drinkRecipe3 = ` ${drinkMeasurements3} ${drinkIngredients3} `
    if (drinkRecipe3 !== ' null null ') {
      drinkRecipe += drinkRecipe3
    }

    let drinkIngredients4 = response.data.drinks[0].strIngredient4
    let drinkMeasurements4 = response.data.drinks[0].strMeasure4
    let drinkRecipe4 = ` ${drinkMeasurements4} ${drinkIngredients4} `
    if (drinkRecipe4 !== ' null null ') {
      drinkRecipe += drinkRecipe4
    }
    
    let drinkIngredients5 = response.data.drinks[0].strIngredient5
    let drinkMeasurements5 = response.data.drinks[0].strMeasure5
    let drinkRecipe5 = ` ${drinkMeasurements5} ${drinkIngredients5} `
    if (drinkRecipe5 !== ' null null ') {
      drinkRecipe += drinkRecipe5
    }

    let drinkIngredients6 = response.data.drinks[0].strIngredient6
    let drinkMeasurements6 = response.data.drinks[0].strMeasure6
    let drinkRecipe6 = ` ${drinkMeasurements6} ${drinkIngredients6} `
    if (drinkRecipe6 !== ' null null ') {
      drinkRecipe += drinkRecipe6
    }
    
    let drinkIngredients7 = response.data.drinks[0].strIngredient7
    let drinkMeasurements7 = response.data.drinks[0].strMeasure7
    let drinkRecipe7 = ` ${drinkMeasurements7} ${drinkIngredients7} `
    if (drinkRecipe7 !== ' null null ') {
      drinkRecipe += drinkRecipe7
    }

    let drinkIngredients8 = response.data.drinks[0].strIngredient8
    let drinkMeasurements8 = response.data.drinks[0].strMeasure8
    let drinkRecipe8 = ` ${drinkMeasurements8} ${drinkIngredients8} `
    if (drinkRecipe8 !== ' null null ') {
      drinkRecipe += drinkRecipe8
    }
    
    let drinkIngredients9 = response.data.drinks[0].strIngredient9
    let drinkMeasurements9 = response.data.drinks[0].strMeasure9
    let drinkRecipe9 = ` ${drinkMeasurements9} ${drinkIngredients9} `
    if (drinkRecipe9 !== ' null null ') {
      drinkRecipe += drinkRecipe9
    }
  
    const drinkIngredients10 = response.data.drinks[0].strIngredient10
    const drinkMeasurements10 = response.data.drinks[0].strMeasure10
    const drinkRecipe10 = ` ${drinkMeasurements10} ${drinkIngredients10} `
    if (drinkRecipe10 !== ' null null ') {
      drinkRecipe += drinkRecipe10
    }
    
    const drinkIngredients11 = response.data.drinks[0].strIngredient11
    const drinkMeasurements11 = response.data.drinks[0].strMeasure11
    const drinkRecipe11 = ` ${drinkMeasurements11} ${drinkIngredients11} `
    if (drinkRecipe11 !== ' null null ') {
      drinkRecipe += drinkRecipe11
    }

    const drinkIngredients12 = response.data.drinks[0].strIngredient12
    const drinkMeasurements12 = response.data.drinks[0].strMeasure12
    const drinkRecipe12 = ` ${drinkMeasurements12} ${drinkIngredients12} `
    if (drinkRecipe12 !== ' null null ') {
      drinkRecipe += drinkRecipe12
    }
    
    const drinkIngredients13 = response.data.drinks[0].strIngredient13
    const drinkMeasurements13 = response.data.drinks[0].strMeasure13
    const drinkRecipe13 = ` ${drinkMeasurements13} ${drinkIngredients13} `
    if (drinkRecipe13 !== ' null null ') {
      drinkRecipe += drinkRecipe13
    }

    const drinkIngredients14 = response.data.drinks[0].strIngredient14
    const drinkMeasurements14 = response.data.drinks[0].strMeasure14
    const drinkRecipe14 = ` ${drinkMeasurements14} ${drinkIngredients14} `
    if (drinkRecipe14 !== ' null null ') {
      drinkRecipe += drinkRecipe14
    }
    
    const drinkIngredients15 = response.data.drinks[0].strIngredient15
    const drinkMeasurements15 = response.data.drinks[0].strMeasure15
    const drinkRecipe15 = ` ${drinkMeasurements15} ${drinkIngredients15} `
    if (drinkRecipe15 !== ' null null ') {
      drinkRecipe += drinkRecipe15
    }
   
    drinkData(drinkName, drinkImg, instruction, drinkRecipe)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

//INITIALIZING THE DROP DOWN DATA FOR ALL OF THE LIQOUR TYPES
function initializeDropDownListeners() {
  document.querySelector('#bourbon-drink').addEventListener('change', onDropDownChange)
  document.querySelector('#brandy-drink').addEventListener('change', onDropDownChange) 
  document.querySelector('#cognac-drink').addEventListener('change', onDropDownChange) 
  document.querySelector('#gin-drink').addEventListener('change', onDropDownChange) 
  document.querySelector('#rum-drink').addEventListener('change', onDropDownChange) 
  document.querySelector('#rye-drink').addEventListener('change', onDropDownChange) 
  document.querySelector('#scotch-drink').addEventListener('change', onDropDownChange) 
  document.querySelector('#vodka-drink').addEventListener('change', onDropDownChange) 
  document.querySelector('#whiskey-drink').addEventListener('change', onDropDownChange) 
}
initializeDropDownListeners()

//FUNCTION TO APPEND ALL PERTINENT API DATA TO THE DOM.
function drinkData(drinkName, drinkPic, drinkIntructions, drinkRecipe) {
  
  //creating a para for the drink name and appending it under the content div
  const name = document.createElement('p')
  name.innerText = drinkName
  document.querySelector('#content').append(name)
  
  //creating an image tag and appending below the name of the drink in the content div
  let content = document.querySelector('#content')
  const img = document.createElement('img')
  img.src = drinkPic
  content.append(img)

  //creating a para for the drink instructions and appending below the image 
  const instructions = document.createElement('p')
  instructions.innerText = drinkIntructions
  document.querySelector('#content').append(instructions)


  const recipe = document.createElement('p')
  recipe.innerText = drinkRecipe
  document.querySelector('#content').append(recipe)
  
  //clearing the select field value back to "choose a cocktail"
  document.querySelector('#bourbon-drink').value = ''
  document.querySelector('#brandy-drink').value = ''
  document.querySelector('#cognac-drink').value = ''
  document.querySelector('#gin-drink').value = ''
  document.querySelector('#rum-drink').value = ''
  document.querySelector('#rye-drink').value = ''
  document.querySelector('#scotch-drink').value = ''
  document.querySelector('#vodka-drink').value = ''
  document.querySelector('#whiskey-drink').value = ''
}


//REMOVE ALL FUNCTION BELOW
function removeAll() {
  const oldContent = document.querySelector('#content')
  while (oldContent.lastChild) {
    oldContent.removeChild(oldContent.lastChild)
  }

}