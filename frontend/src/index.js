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
  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  let date = new Date()
  let today = date.getDate()
  let currentMonth = month[date.getMonth()];
  let year = date.getFullYear();

  document.getElementById(today).className += " current"
  // Title
  monthTitle.innerText = `${currentMonth}`
  yearTitle.innerText = `${year}`
}

// Read
const fetchEvents = () => {
  fetch(eventUrl)
  .then(resp => resp.json())
  .then(events => {
    events.forEach(event => {renderEvent(event)})
  })
}

// Click listener for arrows call createDays and pass in 1 for how many times it's been clicked
let displayedTime = new Date().getMonth()

const createDays = (displayedMonth = 0) => {
  displayedTime += displayedMonth
  const firstDays = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0]
  const startDay = firstDays[displayedTime]
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const numOfDays = monthDays[displayedTime]
  let dayCounter = 1;

  for (let i = 0; i < 35; i++) {
    const dayBox = document.createElement('span')
    if (i >= startDay && dayCounter <= numOfDays) {
      dayBox.innerText = dayCounter
      dayBox.id = dayCounter
      ++dayCounter
    }    
    dayBoxes.append(dayBox)
    dayBox.className = "day"
  }
  currentDay()
}

// Change display for users
const displayUser = () => {
  let navbarPics = document.getElementById('avatar-bar')
  navbarPics.addEventListener('click', () => {
    let selectedUser = event.target.parentNode.parentNode
    if (selectedUser.id == 1) {
      let color1 = 'rgb(' + 255 + ',' + 99 + ',' + 99 + ')';
      document.body.style.backgroundColor = color1;
      monthTitle.style.color = color1;
      dayBoxes.innerText.style = color1;
    } else if (selectedUser.id == 2) {
      let color2 = 'rgb(' + 115 + ',' + 167 + ',' + 250 + ')';
      document.body.style.backgroundColor = color2;
      monthTitle.style.color = color2;
    } else if (selectedUser.id == 3) {
      let color3 = 'rgb(' + 223 + ',' + 128 + ',' + 255 + ')';
      document.body.style.backgroundColor = color3;
      monthTitle.style.color = color3;
    } else if (selectedUser.id == 4) {
      let color4 = 'rgb(' + 250 + ',' + 179 + ',' + 97 + ')';
      document.body.style.backgroundColor = color4;
      monthTitle.style.color = color4;
    } else if (selectedUser.id == 5) {
      let color5 = 'rgb(' + 36 + ',' + 199 + ',' + 60 + ')';
      document.body.style.backgroundColor = color5;
      monthTitle.style.color = color5;
    }
    // if (selectedUser )
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