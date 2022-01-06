import * as Validation from './validation.js'

let countdownTitle = document.querySelector('h1')

const countdownEventTitle = document.getElementById('countdown-event')
const countdownEventTitleBtn = document.querySelector('.countdown-event-input button')

const countdownDateInput = document.getElementById('countdown-date')
const countdownDateBtn = document.querySelector('.select-date-container button')

const countdownDays = document.querySelector('.days p')
const countdownHours = document.querySelector('.hours p')
const countdownMinutes = document.querySelector('.minutes p')

let countdownEventDate

// Get the value of event input 
countdownEventTitleBtn.addEventListener('click', () => {

    Validation.inputValidator(countdownEventTitle)

    // if validation is good, proceed to changing the h1 title
    if(Validation.validation) {

      countdownTitle.innerText = `${countdownEventTitle.value} Countdown Timer`

    }


})


// Get the value of the date
countdownDateBtn.addEventListener('click', () => {

  Validation.inputValidator(countdownDateInput)

  // Change the string format of the date
  countdownEventDate = countdownDateInput.value

  countdownEventDate = countdownEventDate.split('-')

  calculateCountdownTime()

})


const calculateCountdownTime = () => {

  // Change the Date string to Date
  countdownEventDate = new Date(countdownEventDate[0], countdownEventDate[1] -1, countdownEventDate[2])

  const updatedTime = setInterval(function() {

    // Get the current Date 
    let today = new Date()
    
    // Subtract the countdown event date and current date
    let countdownTimer = countdownEventDate.getTime() - today.getTime()
    
    // Count time by blocks
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    
    const daysLeft = Math.floor(countdownTimer / day)
    const hoursLeft = Math.floor((countdownTimer % day) / hour)
    const minutesLeft = Math.floor((countdownTimer % hour) / minute)
    
    displayCountdownTimer(daysLeft, hoursLeft, minutesLeft)

    // If the countdown date is before current date, stop the countdown
    if(countdownTimer < 1) {

      clearInterval(updatedTime)

    }

  }, 1000)


}

const displayCountdownTimer = (days, hours, minutes) => {

  countdownDays.innerText = days
  countdownHours.innerText = hours
  countdownMinutes.innerText = minutes

}
