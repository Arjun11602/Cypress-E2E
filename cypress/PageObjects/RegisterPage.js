export class RegisterPage{

        WebLocators= {

            firstName:'#input-firstname',
            lastName:'#input-lastname',
            emailId:'#input-email',
            TelePhone:'#input-telephone',
            Password:'#input-password',
            confirmPassword:'#input-confirm',
            policyCheck:'input[type="checkbox"]',
            continueButton:'[class="btn btn-primary"]',
            HomePagemsg:'#content>h1'

        }

        OpenURL(){

            cy.visit(Cypress.env('URL'))
        }

        enterFirstName(firstname){

            cy.get(this.WebLocators.firstName).type(firstname)

        }

        enterLastName(Lastname){

            cy.get(this.WebLocators.lastName).type(Lastname)

        }

        enteremailId(emailId){

            cy.get(this.WebLocators.emailId).type(emailId)

        }
        enterTelePhone(TelePhone){

            cy.get(this.WebLocators.TelePhone).type(TelePhone)

        }
        enterPassword(password){

            cy.get(this.WebLocators.Password).type(password)
        }
        enterconfirmPassword(confirmPassword){

            cy.get(this.WebLocators.confirmPassword).type(confirmPassword)
        }
        enterpolicyCheck(){

            cy.get(this.WebLocators.policyCheck).check()

            
        }
        clickcontinueButton(){
            cy.get(this.WebLocators.continueButton).click()

        }
        Verifylogin(){
            cy.get(this.WebLocators.HomePagemsg).should('have.text','Your Account Has Been Created!')

        }

}
