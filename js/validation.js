let validation = false

const inputValidator = (input) => {

    // if the input was left blanked or unchaged, change border to red and write that they need to insert as word
    if (input.value === '') {

      input.classList.add('incorrect-validation')

      if(input.previousElementSibling === null) {

        // create a validator sentence to explain what is incorrect
        const validationSentence = document.createElement('small')
        validationSentence.innerText = 'Please insert a sentence in the input'
        input.before(validationSentence)

      }

      return false

    } else {

      validation = true

      input.classList.add('correct-validation')

      let currentStep = input.closest('.countdown-step')

      activateCurrentStep(currentStep)

    }

  // if the input was filled, proceed to the next pagef

}

const activateCurrentStep = (currentStep) => {

  // Get current element with active-class
  const currentActiveElem = document.querySelector('.active-class')
  //  Remove active class
  currentActiveElem.classList.remove('active-class')
  // Add active class to next sibling
  if (currentStep.nextElementSibling) {

    currentStep.nextElementSibling.classList.add('active-class')

  }

}

  
export { inputValidator, validation }