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
let title = document.getElementById('title')
const nextButton = document.getElementById('nextButton')
const previousButton = document.getElementById('previousButton')
const familyName = document.getElementById('family-name')
const firstName = document.getElementById('first-name')
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
  // ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currentMonth
let date = new Date()
let today = date.getDate()
currentMonth = month[date.getMonth()];

// Current day
let currentDay = () => {
  let date = new Date()
  let today = date.getDate()
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

let displayedMonth = new Date().getMonth()

const createDays = (monthModifier = 0) => {
  displayedMonth += monthModifier
  const firstDays2019 = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0]
  // const firstDays2020 = [3, 6, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2]
  const startDay = firstDays2019[displayedMonth]
  const monthDays2019 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const numOfDays = monthDays2019[displayedMonth]
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
      title.style.color = color1;
      // daySpans.innerText.style.color = color1;
      // daySpans.innerText.style
    } else if (selectedUser.id == 2) {
      let color2 = 'rgb(' + 115 + ',' + 167 + ',' + 250 + ')';
      document.body.style.backgroundColor = color2;
      title.style.color = color2;
    } else if (selectedUser.id == 3) {
      let color3 = 'rgb(' + 223 + ',' + 128 + ',' + 255 + ')';
      document.body.style.backgroundColor = color3;
      title.style.color = color3;
    } else if (selectedUser.id == 4) {
      let color4 = 'rgb(' + 250 + ',' + 179 + ',' + 97 + ')';
      document.body.style.backgroundColor = color4;
      title.style.color = color4;
    } else if (selectedUser.id == 5) {
      let color5 = 'rgb(' + 36 + ',' + 199 + ',' + 60 + ')';
      document.body.style.backgroundColor = color5;
      title.style.color = color5;
    }
    // if (selectedUser )
      // Fetch individual user's events
      // Iterate and display event indicator
      // Store in a global variable
  })
}

const incrementMonth = () => {
  let currentIndex = month.indexOf(currentMonth)
  currentMonth = month[currentIndex + 1]
  monthTitle.innerText = currentMonth
}

const decrementMonth = () => {
  let currentIndex = month.indexOf(currentMonth)
  currentMonth = month[currentIndex - 1]
  monthTitle.innerText = currentMonth
}

// Change page
const turnPage = () => {
  nextButton.addEventListener('click', () => {
    removeDays()
    createDays(1)
    incrementMonth()
  })

  if 

  previousButton.addEventListener('click', () => {
    removeDays()
    createDays(-1)
    decrementMonth()
  })
}

// Clear page
const removeDays = () => {
  let parent = document.getElementById("dayBoxes");
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// Display all
  familyName.addEventListener('click', () => {
    let familyColor = 'rgb(' + 14 + ',' + 161 + ',' + 147 + ')';
    document.body.style.backgroundColor = familyColor;
    title.style.color = familyColor;
  })

// Create


// Update


// Destroy


// Click listeners


// Function calls
createDays()
displayUser()
turnPage()