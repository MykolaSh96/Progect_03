class Booking {

  // Locators 

  radioButtonOneWay(){
    return cy.get('.ml-0> .mr-1');
  }

  radioButtonRoundTrip(){
    return cy.get(':nth-child(2) > .mr-1');
  }
  labelCabinClass(){
    return cy.get(':nth-child(2) > .select > select');
  }
  
  dropdownCabinClass(){
    return cy.get(':nth-child(2) > .select > select');
  }

  labelFrom(){
    return cy.get(':nth-child(3) > .label');
  }

  dropdownFrom(){
    return cy.get(':nth-child(3) > .select > select');
  }

  labelTo(){
    return cy.get(':nth-child(4) > .label');
  }

  dropdownTo(){
    return cy.get(':nth-child(4) > .select > select');
  }

  labelDepart(){
    return cy.get(':nth-child(5) > .label');
  }
  dataPickerDepart(){
    return cy.get(':nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input');
  }
  labelReturn(){
    return cy.get(':nth-child(6) > .label');
  }

  dataPickerReturn(){
    return cy.get(':nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input');
  }

  labelNumberOfPassengers(){
    return cy.get(':nth-child(7) > .label');
  }

  dropdownNumberOfPassengers(){
    return cy.get(':nth-child(7) > .select > select');
  }

  labelPassenger1(){
    return cy.get(':nth-child(8) > .label');
  }

  dropdownPassenger1(){
    return cy.get(':nth-child(8) > .select > select');
  }

  bookButton(){
    return cy.get('.Button_c_button__TmkRS');
  }


  getDepart(){
   return cy.get('[style="width: 48%; color: var(--mainBlue);"] > .is-underlined')
  }

  getDirections(){
    return cy.get('[style="width: 48%; color: var(--mainBlue);"] > .is-italic')
  }

  getDate(){
    return cy.get('[style="width: 48%; color: var(--mainBlue);"] > p')
  }

  getReturnLabel(){
    return cy.get('.ml > .is-underlined')
  }

  getRetunDirection(){
    return cy.get('.ml > .is-italic')
  }

  getReturnDate(){
    return cy.get('.ml > p')
  }

  getDropdownPassenger2(){
    return cy.get(':nth-child(9) > .select > select')
  }
  

  // get3Select(){
  //   return cy.get(".select").then(($el) =>{
  //     return Cypress.$($el).slice(0, 3).toArray();
  //   })
  // }

  


  //Methods

  /**
   * Click the 'Boking' button.
   */
  clickBook(){
    this.bookButton().click();
  }

  /**
   * Click the "One way" radio duton
   *  
   */

  clickOneWay(){
    this.radioButtonOneWay().click()
  }

  /**
   * Click the "Round trip" radio buton
   */
  clickRoundTrip(){
    this.radioButtonRoundTrip().click()
  }

  /**
   * 
   * @param {number} day 
   * @param {number} month 
   * @param {number} year 
   * @returns it returns different format 2025-06-15
   */
  newDate(day, month, year){
    return (`${year}-${month}-${day}`)
  }
  




}

export default Booking 
