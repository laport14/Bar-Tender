## Project Name

# Bar-Tender

## Project Description

The project is going to be a cocktail based website that allows the user the ability to select drinks based on the liquor preference. Under each of the parent liqour category there will be a drop down of available drink names to choose from. When selecting the drink name, the drink name will be displayed, there will be a text field to show how the drink is made and a picture to represent the respective drink.

## API and Data Sample

https://www.thecocktaildb.com/api.php

- endpoints are not very user friendly, am going to use search by cocktail name as it provides the most data relative to the selection
ex. below
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
*These are examples only. Replace with your own MVP features.*

- Find and use external api with pertinent data that meets project description requirements
- Nav bar with the liquor choices and a drop down under each liquor with the respective cocktails listed
- After selecting the cocktail -> Display cocktail picture, intructions and name from external api data on page

#### PostMVP  


- Add a randomization button that will display a random drink for the user. Allow the website to choose the drink for you.
- Pop up when loading the website that asks the user if they are 21 and up.
- Animated CSS styling in the background of the webpage.
- Incorporate external links to bar related gear and tutorials

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval & HTML Structure | Incomplete
|Sept 22| CSS & Javascript Structure | Incomplete
|Sept 23| Completion of Javascript & MVP requirements | Incomplete
|Sept 24| Post MVP/ Advanced CSS styling | Incomplete
|Sept 25| Final Touches & Presentations | Incomplete

## Priority Matrix

https://docs.google.com/drawings/d/14rypvt5jJaeEfUWLarkFZAKw1Gv--qGMizwtBMiGqbc/edit?usp=sharing

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
