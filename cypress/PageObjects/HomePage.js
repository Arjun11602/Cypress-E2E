
export class HomePage{


    WebLocators={

        search:'[class="form-control input-lg"]',
        searchbutton:'[class="btn btn-default btn-lg"]',
        addtocart:'Add to Cart',
        successmessage:'.alert'


    }

        enyterproductName(productName){

            cy.get(this.WebLocators.search).type(productName)
            cy.get(this.WebLocators.searchbutton).click()


        }

        addToCart(){

            cy.contains(this.WebLocators.addtocart).first().click()

        }

        Verifysuccessmessage(){

            return cy.get(this.WebLocators.successmessage)
        }




}