import { RegisterPage } from "../PageObjects/RegisterPage"
import Register from "../fixtures/Register.json"
const regisObj=new RegisterPage()

describe('Register Page',()=>{
 
     it('RegisterTest',()=>{
        regisObj.OpenURL()
        regisObj.enterFirstName(Register.Fname)
        regisObj.enterLastName(Register.Lname)
        regisObj.enteremailId(Register.email)
        regisObj.enterTelePhone(Register.TelePhone)
        regisObj.enterPassword(Register.password)
        regisObj.enterconfirmPassword(Register.password)
        regisObj.enterpolicyCheck()
        regisObj.clickcontinueButton()
        regisObj.Verifylogin()

     })



})