const dataHomePage = require('../../fixtures/homePageData.json')

class HomePage
{
    webLocators = {
        propertyTypeParentElement: '.dd__head',
        propertyTypeChildElement: '.dd__text',
        propertyTypefirstDropdownOption: 'Property type',
        propertyTypeDropdownOptions: '.dropdown-list__items',
        priceSelectorParentElement: '.price-selector',
        priceSelectorChildElement:'.dd__label',
        priceSelectorfirstDropdownOption: 'Price',
        buttonLocator: 'button',
        priceSelectorDropdownOptions:'.price-selector input.range-selector__input',
        btnFind: '.button-2',
        searchResultDiv: "span[aria-label='Search results count']"
    }

    openPropertyFinderHomePage() 
    {
        cy.visit(dataHomePage.url);
    }

    selectVilla() 
    {
        cy.get(this.webLocators.propertyTypeParentElement)
          .contains(this.webLocators.propertyTypeChildElement, this.webLocators.propertyTypefirstDropdownOption)
          .click({ force: true });
    
        cy.get(this.webLocators.propertyTypeDropdownOptions)
          .contains(this.webLocators.buttonLocator, dataHomePage.propertyType)
          .click({ force: true });
    }

    filterVillaPrice() 
    {
        cy.get(this.webLocators.priceSelectorParentElement)
          .contains(this.webLocators.priceSelectorChildElement, this.webLocators.priceSelectorfirstDropdownOption)
          .click({ force: true });
    
        cy.get(this.webLocators.priceSelectorDropdownOptions)
          .last()
          .type(dataHomePage.maxPrice, { force: true });
    }

    clickFindButton() 
    {
        cy.get(this.webLocators.btnFind).eq(1).click({ force: true });
    }

    checkAPIStatus()
    {
        cy.request({
            method: dataHomePage.httpsMethod,
            url: dataHomePage.endpoint,
            failOnStatusCode: false,
          }).then((response) => {
            //validate Successful GET API Call 
            expect(response.status).to.equal(dataHomePage.successGETAPIStatusCode);
        })
    }

    getUISearchCount()
    {
       // cy.wait(5000)
       cy.searchresult(this.webLocators.searchResultDiv, dataHomePage.expectedPageCount) 
    }
}

export default new HomePage();