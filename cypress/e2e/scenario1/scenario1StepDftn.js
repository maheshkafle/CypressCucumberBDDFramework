import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homepage from '../pages/homePage';

Given('I open Propertyfinder webapp', () => 
{   
    homepage.openPropertyFinderHomePage()
})

When('I filter for property type villa with maximum price range upto 300000 AED and click on search button', ()=>
{   
    homepage.selectVilla()
    homepage.filterVillaPrice()
    homepage.clickFindButton()
})

Then('Then I verify that total displayed number of results from the API response matches the total displayed property results', () => 
{
    homepage.checkAPIStatus()
    homepage.getUISearchCount()
})