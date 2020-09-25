## Project Name

# Bar-Tender
Project link: https://laport14.github.io/Bar-Tender/
## Project Description

The project is going to be a cocktail based website that allows the user the ability to select drinks based on the liquor preference. Under each of the parent liqour category there will be a drop down of available drink names to choose from. When selecting the drink name, the drink name will be displayed, there will be a text field to show how the drink is made and a picture to represent the respective drink.

## API and Data Sample

https://www.thecocktaildb.com/api.php

- endpoints are not very user friendly, am going to use search by cocktail name as it provides the most data relative to the selection
ex. below: 
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
```
{
    "drinks": [
        {
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": null,
            "strDrinkES": null,
            "strDrinkDE": null,
            "strDrinkFR": null,
            "strDrinkZH-HANS": null,
            "strDrinkZH-HANT": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strInstructionsES": null,
            "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
            "strInstructionsFR": null,
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": null,
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59"
        }
```


## Wireframes

-DeskTop & Mobile Wireframe:
https://www.figma.com/file/zHi57d0hsaF6NnNnXMsaI1/Bar-Tender?node-id=0%3A1

### MVP/PostMVP

#### MVP 

- Find and use external api with pertinent data that meets project description requirements
- Nav bar with the liquor choices and a drop down under each liquor with the respective cocktails listed
- After selecting the cocktail -> Display cocktail picture, intructions and name from external api data on page

#### PostMVP  


- Add a randomization button that will display a random drink for the user. Allow the website to choose the drink for you.
- Pop up when loading the website that asks the user if they are 21 and up.
- Animated CSS styling in the background of the webpage.
- Ingredients list added to the page for each drink.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval & HTML Structure | Complete
|Sept 22| CSS & Javascript Structure | Complete
|Sept 23| Completion of Javascript & MVP requirements | Complete
|Sept 24| Post MVP/ Advanced CSS styling | Partial Completion
|Sept 25| Final Touches & Presentations | Incomplete

## Priority Matrix

https://docs.google.com/drawings/d/14rypvt5jJaeEfUWLarkFZAKw1Gv--qGMizwtBMiGqbc/edit?usp=sharing

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | M | 3hrs| 2.5hrs | 2.5hrs |
| Pulling Drink Names from API | H | 3hrs| 1.5hrs | 1.5hrs |
| Building Selector or Dropdown from Drink Names | H | 3hrs| 4hrs | 4hrs |
| Selector data fulfilled for All Liquor types | H | 3hrs| 2hrs | 2hrs |
| DOM work, w/ event listener for Drink Selection | H | 3hrs| 4hrs | 4hrs |
| Pulling API data for Drink Info | H | 3hrs| 1.5hrs | 1.5hrs |
| Appending Drink Data via the DOM | H | 3hrs| 2hrs | 2hrs |
| Base Page styling | H | 2.5hrs| 2hrs | 2hrs |
| Page Styling with Appended MTL | H | 3hrs| 1.5hrs | 1.5hrs |
| JS Functions executing | H | 3hrs| 4hrs | 4hrs |
| Debugging | H | 4hrs| 4hrs | 4hrs |
| Troubleshooting and Adjustments | H | 4hrs| 3hrs | 3hrs |
| Total | H | 37.5hrs| 32hrs | 32hrs |

## Code Snippet

Was able to create logic to append drink instructions and measurements to the webpage. The difficulty was with the way the api data was structured. The conditional below appends the drink measurements and the drink ingredients to the page if null does not exist for both the drink measurements and the drink ingredients.  

```
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
```

## Change Log
 Changed the liquor choices based on the most common liquors. Data had non-alcoholic options thus hardcoding the values in.

 The dropdown is truly a select tag, changed this to accommodate for the 'change' event listener to trigger appending the data to webpage.
