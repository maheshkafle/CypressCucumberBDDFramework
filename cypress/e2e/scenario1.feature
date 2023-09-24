Feature: Property search results validation

        Validate total displayed number of results for category Villas with price range more than or equal to 300,000 AED / year
    
    Scenario: Property Type Villa search results validation
    Given I open Propertyfinder webapp
    When I filter for property type villa with maximum price range upto 300000 AED and click on search button
    Then Then I verify that total displayed number of results from the API response matches the total displayed property results