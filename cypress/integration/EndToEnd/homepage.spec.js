/// <reference types="cypress"/>

//User registers, logins, adds product to basket and checksout basketpage
describe("End to end Test", ()=>
{

    it("register",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.get(".ico-register").should("be.visible").click()
        cy.get(".page-title").should("be.visible")
        cy.get("#gender-male").scrollIntoView().should("be.visible").click()
        cy.get("#FirstName").scrollIntoView().type("testName")
        cy.get("#LastName").type("testSurname")
        cy.get("select[name='DateOfBirthDay']").select("7")
        cy.get("select[name='DateOfBirthMonth']").select("May")
        cy.get("select[name='DateOfBirthYear']").select("2000")
        cy.get("#Email").type("testmail11@gmail.com")
        cy.get("#Company").type("testCompany")
        cy.get("#Newsletter").scrollIntoView().should("be.visible").click()
        cy.get("#Password").type("testPassword")
        cy.get("#ConfirmPassword").type("testPassword")
        cy.get("#register-button").scrollIntoView().should("be.visible").click()
        cy.get(".ico-login").click()
    })

    it("login",()=>{
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get("#Email").type("testmail11@gmail.com")
        cy.get("#Password").type("testPassword")
        cy.get("#RememberMe").should("be.visible").click()
        cy.get(".login-button").should("be.visible").click()
    }) 
    
    it("Search product",()=>{
        
        cy.visit("https://demo.nopcommerce.com")
        cy.get("#small-searchterms").should("be.visible").type("apple")
        cy.get(".button-1.search-box-button").click()
        cy.get(".button-2.product-box-add-to-cart-button").should("be.visible").click()
        cy.get("#add-to-cart-button-4").should("be.visible").click()  
    })

    it("Basket", ()=>{

        cy.get(".cart-label").should("be.visible").click()
    } )
})
