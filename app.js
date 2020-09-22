// API docs https://www.thecocktaildb.com/api.php

async function fetchData(liquor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
  try {
    const response = await axios.get(url)
    let drinkName = response.data.drinks
    console.log(drinkName)
    optionValues(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchData('Bourbon')

function optionValues(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesBrandy(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataBrandy('Brandy')

function optionValuesBrandy(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesCognac(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataCognac('Cognac')

function optionValuesCognac(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesGin(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataGin('Gin')


function optionValuesGin(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesRum(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataRum('Rum')

function optionValuesRum(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesRye(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataRye('Rye Whiskey')

function optionValuesRye(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesScotch(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataScotch('Scotch')

function optionValuesScotch(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesVodka(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataVodka('Vodka')

function optionValuesVodka(lists) {
  console.log(lists)
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
    console.log(drinkName)
    optionValuesWhiskey(drinkName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataWhiskey('Whiskey')

function optionValuesWhiskey(lists) {
  console.log(lists)
  const select = document.querySelector('#whiskey-drink')
    let results = lists.forEach((drink) => {
    const option = document.createElement('option')
    option.value = `${drink.strDrink}`
    option.textContent = `${drink.strDrink}`
    select.appendChild(option)
  });
  return results; 
} 