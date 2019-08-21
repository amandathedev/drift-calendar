// URLs
const rootUrl = "http://localhost:3000"
const userUrl = `${rootUrl}/users`
const eventUrl = `${rootUrl}/events`
const usereventsUrl = `${rootUrl}/userevents`

// HTML Components
const calendarDiv = document.getElementById('calendar')
const monthDiv = document.getElementById('month')
const h1 = document.getElementById('title')
let daySpans = document.getElementsByClassName('day')
let dayBoxes = document.getElementById('dayBoxes')
let monthTitle = document.getElementById('monthTitle')
let yearTitle = document.getElementById('yearTitle')

// Current day
let currentDay = () => {
  let date = new Date()
  let today = date.getDate()
  console.log(today);
  document.getElementById(today).className += " current"
  // Title
  // monthTitle = 
}

// Read
const fetchEvents = () => {
  fetch(eventUrl)
  .then(resp => resp.json())
  .then(events => {
    events.forEach(event => {renderEvent(event)})
  })
}

const createDays = () => {
  for (let i = 0; i < 35; i++) {
    let dayBox = document.createElement('span')
    dayBoxes.append(dayBox)
    dayBox.className = "day"
    dayBox.innerText = i + 1
    dayBox.id = i + 1
  }
  currentDay()
}

// Change display for users
const displayUser = () => {
  let navbarPics = document.getElementById('avatar-bar')
  navbarPics.addEventListener('click', () => {
    let selectedUser = event.target.parentNode.parentNode
    if (selectedUser.id == 1) {
      document.body.style.backgroundColor = "red"
    }
    if (selectedUser )
      // Fetch individual user's events
      // Iterate and display event indicator
      // Store in a global variable
  })
}

// Create


// Update


// Destroy


// Click listeners


// Function calls
createDays()
displayUser()