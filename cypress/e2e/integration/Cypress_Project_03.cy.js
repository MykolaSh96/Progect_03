/// <reference types= "cypress"/>

import Booking from "../../../pages/Booking";
const booking = new Booking() 

const date = new Date;
const nextSevenDays = new Date(date.getTime() + 7 *24 * 60 * 60 * 1000);
const nextMonth = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000);  


describe("Practice_03",() => {
  
  beforeEach(()=> { 
    cy.visit('https://www.techglobal-training.com/frontend/project-3')
  });

  it('Test Case 01 - Validate the default Book your trip form', () => {
    /**
     * Navigate to https://techglobal-training.com/frontend/project-3
       Validate that the “One way” radio button is displayed enabled and selected by default
       Validate that the “Round trip” radio button is displayed enabled and not selected by default
       Validate that the “Cabin Class” label and dropdown are displayed
       Validate that the “From” label and dropdown are displayed
       Validate that the “To” label and dropdown are displayed
       Validate that the “Depart” label and date picker is displayed
       Validate that the “Return” label and date picker is displayed and disabled
       Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
       Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
       Validate that the “BOOK” button is displayed and enabled
     */
    
       booking.radioButtonOneWay().should('be.visible').and('not.be.disabled').and('be.checked')
       booking.radioButtonRoundTrip(':nth-child(2) > .mr-1 ').should('be.visible').and('not.be.disabled').and('not.be.checked')
       booking.labelCabinClass().should('be.visible')
  
       booking.dropdownCabinClass().should('be.visible')       
       booking.labelFrom().should('be.visible')
       booking.dropdownFrom().should('be.visible')
       booking.labelTo().should('be.visible')
       booking.dropdownTo().should('be.visible')
       booking.labelDepart().should('be.visible')
       booking.dataPickerDepart().should('be.visible')
       booking.labelReturn().should('be.visible')
       booking.dataPickerReturn().should('be.visible')
       booking.labelNumberOfPassengers().should('be.visible')
       booking.dropdownNumberOfPassengers().should('be.visible').and('have.value', '1')
       booking.labelPassenger1().should('be.visible')
       booking.dropdownPassenger1().should('be.visible').should('have.value', 'Adult (16-64)')
       booking.bookButton().should('be.visible').and('have.text','BOOK').and('not.be.disabled')


  })


  it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {
    /**
       Navigate to https://techglobal-training.com/frontend/project-3
       Click on the “Round trip” radio button and validate it is selected
       Validate that the “One way” radio button is not selected
       Validate that the “Cabin Class” label and dropdown are displayed
       Validate that the “From” label and dropdown are displayed
       Validate that the “To” label and dropdown are displayed
       Validate that the “Depart” label and date picker is displayed
       Validate that the “Return” label and date picker is displayed
       
       Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
       Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
       Validate that the “BOOK” button is displayed and enabled
     */
    
      booking.clickRoundTrip()
      booking.radioButtonOneWay().should('be.not.checked')
      booking.labelCabinClass().should('be.visible')
      booking.dropdownCabinClass().should('be.visible')
      booking.labelFrom().should('be.visible')
      booking.dropdownFrom().should('be.visible')
      booking.labelTo().should('be.visible')
      booking.dropdownTo().should('be.visible')
      booking.labelDepart().should('be.visible')
      booking.dataPickerDepart().should('be.visible')
      booking.labelReturn().should('be.visible')
      booking.dataPickerReturn().should('be.visible')
      booking.dropdownNumberOfPassengers().should('be.visible').and('have.value', '1')
      booking.labelNumberOfPassengers().should('be.visible')
      booking.dropdownPassenger1().should('be.visible').and('have.value', 'Adult (16-64)')
      booking.bookButton().should('be.visible').and('have.text','BOOK').and('not.be.disabled')
      
      //  cy.get(':nth-child(3) > .label').should('be.visible')
      //  cy.get(':nth-child(3) > .select > select').should('be.visible')
      //  cy.get(':nth-child(4) > .label').should('be.visible')
      //  cy.get(':nth-child(4) > .select > select').should('be.visible')
      //  cy.get(':nth-child(5) > .label').should('be.visible')
      //  cy.get(':nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input').should('be.visible')
      //  cy.get(':nth-child(6) > .label').should('be.visible')
      //  cy.get(':nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
      //  cy.get(':nth-child(7) > .label').should('be.visible')
      //  cy.get(':nth-child(7) > .select > select').should('be.visible').and('have.value', '1')
      //  cy.get(':nth-child(8) > .label').should('be.visible')
      //  cy.get(':nth-child(8) > .select > select').should('be.visible').should('have.value', 'Adult (16-64)')
      //  cy.get('.Button_c_button__TmkRS').should('be.visible').and('have.text','BOOK').and('not.be.disabled')

  })

  it('Test Case 03 - Validate the booking for 1 pasanger and one way',() =>{

    /**
     * Navigate to https://techglobal-training.com/frontend/project-3
       Select the “One way” radio button
       Select “Business” for the “Cabin Class” dropdown
       Select “Illinois” for the “From” dropdown
       Select “Florida” for the “To” dropdown
       Select the next week for the ”Depart”
       Select “1” for the “Number of passengers” dropdown
       Select “Senior (65+)” for the Passenger 1 dropdown
       Click on the “BOOK” button
       Validate the booking information displayed below
       DEPART
       IL to FL
       {dynamic date}
       Number of passengers: 1
       Passenger 1: Senior (65+)
       Cabin Class: Business
     */
       booking.clickOneWay()
       booking.dropdownCabinClass().select('Business')
       booking.dropdownFrom().select('Illinois')
       booking.dropdownTo().select('Florida')
       booking.dataPickerDepart().clear().type(booking.newDate(nextSevenDays))
       booking.dropdownNumberOfPassengers().select(0, {force: true})
       booking.dropdownPassenger1().select("Senior (65+)")
       booking.clickBook()

       booking.getDepart().should('be.visible')
       booking.getDirections().should('be.visible').and('have.text', 'IL to FL')
       booking.getDate().should('be.visible').and('have.text', "Tue Jun 04 2024")

       const info = ['Number of Passengers: 1','Passenger 1: Senior (65+)', 'Cabin class: Business'];

       cy.get('.mt-4 > :nth-child(1), .mt-4 > :nth-child(2) , .mt-4 > :nth-child(3)').each(($el, index)=>{
        cy.wrap($el).should('have.text', info[index])
       })

  })

  it('Test Case 04 - Validate the booking for 1 passenger and round trip',() => {

    /**
     * Navigate to https://techglobal-training.com/frontend/project-3
      Select the “Round trip” radio button
      Select “First” for the “Cabin Class” dropdown
      Select “California” for the “From” dropdown
      Select “Illinois” for the “To” dropdown
      Select the next week for the ”Depart”
      Select the next month for the “Return”
      Select “1” for the “Number of passengers” dropdown
      Select “Adult (16-64)” for the Passenger 1 dropdown
      Click on the “BOOK” button
      Validate the booking information displayed below
      DEPART
      CA to IL
      {dynamic date}
      Number of passengers: 1
      Passenger 1: Adult (16-64)
      Cabin Class: First


      RETURN
      IL to CA
      {dynamic date}
     */

      booking.clickRoundTrip()
      booking.dropdownCabinClass().select('First')
      booking.dropdownFrom().select('California')
      booking.dropdownTo().select('Illinois')
      booking.dataPickerDepart().clear().type(booking.newDate(nextSevenDays))
      booking.dataPickerReturn().clear().type(booking.newDate(nextMonth))
      booking.dropdownNumberOfPassengers().select(0, {force: true})
      booking.dropdownPassenger1().select('Adult (16-64)')
      booking.clickBook()

       booking.getDepart().should('be.visible')
       booking.getDirections().should('be.visible').and('have.text', 'CA to IL')
       booking.getDate().should('be.visible').and('have.text', "Tue Jun 04 2024")

       booking.getReturnLabel().should('be.visible')
       booking.getRetunDirection().should('have.text','IL to CA')
       booking.getReturnDate().should('have.text', 'Thu Jun 27 2024')

       const info1 = ['Number of Passengers: 1','Passenger 1: Adult (16-64)','Cabin class: First'];

       cy.get('.mt-4 > :nth-child(1), .mt-4 > :nth-child(2) , .mt-4 > :nth-child(3)').each(($el, index) => {
           cy.wrap($el).should('have.text', info1[index])
       })


   })

   it('Test Case 05 - Validate the booking for 2 passengers and one way', ()=>{
    /**
     * Navigate to https://techglobal-training.com/frontend/project-3
       Select the “One way” radio button
       Select “Premium Economy” for the “Cabin Class” dropdown
       Select “New York” for the “From” dropdown
       Select “Texas” for the “To” dropdown
       Select the next day for the ”Depart”
       Select “2” for the “Number of passengers” dropdown
       Select “Adult (16-64)” for the Passenger 1 dropdown
       Select “Child (2-11)” for the Passenger 2 dropdown
       Click on the “BOOK” button
       Validate the booking information displayed below

       DEPART
       NY to TX
       {dynamic date}
       Number of passengers: 2
       Passenger 1: Adult (16-64)
       Passenger 2: Child (2-11)
       Cabin Class: Premium Economy
     */

       booking.clickOneWay()
       booking.dropdownCabinClass().select('Premium Economy')
       booking.dropdownFrom().select('New York')
       booking.dropdownTo().select('Texas')
       booking.dataPickerDepart().clear().type(booking.newDate('04','06','2024'))
       booking.dropdownNumberOfPassengers().select(1,{force: true})
       booking.dropdownPassenger1().select('Adult (16-64)')
       booking.getDropdownPassenger2().select('Child (2-11)')
       booking.clickBook()
       booking.getDepart().should('be.visible')
       booking.getDirections().should('have.text','NY to TX')
       booking.getDate().should('have.text','Mon Jun 03 2024')

       const info3 = ['Number of Passengers: 2','Passenger 1: Adult (16-64)','Passenger 2: Child (2-11)','Cabin class: Premium Economy'];

       cy.get('.mt-4 > :nth-child(1), .mt-4 > :nth-child(2), .mt-4 > :nth-child(3), .mt-4 > :nth-child(4)').each(($el, index)=>{
        cy.wrap($el).should('have.text', info3[index])
       })
   })


  
})