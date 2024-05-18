import { HomePage } from "../../PageObjects/HomePage"
import AddtoCart from "../../fixtures/AddtoCart.json"

const Homepageobj =new HomePage()


describe('Addtocard',()=>{

    before(()=>{

        cy.login(AddtoCart.login.username,AddtoCart.login.password)

    })

    it('AddtocartTest',()=>{

        Homepageobj.enyterproductName(AddtoCart.product.productName)
        cy.screenshot('prodName')
        cy.wait(3000)
        Homepageobj.addToCart()
        cy.screenshot('addtocart')
        Homepageobj.Verifysuccessmessage().should('be.visible').and('contain',AddtoCart.successMessage.successmessage).and('contain',AddtoCart.product.productName)


    })


    })

