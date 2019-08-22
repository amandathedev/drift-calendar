// URLs
const rootUrl = "http://localhost:3000/api/v1"
const usersUrl = `${rootUrl}/users`
const eventsUrl = `${rootUrl}/events`
const usereventsUrl = `${rootUrl}/user_events`

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
const createEventButton = document.getElementById('create-event')


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

const currentMonthNum = date.getMonth()
const currentMonth = month[currentMonthNum]


let displayedMonthNum = date.getMonth()
let displayedMonth = month[displayedMonthNum];


let rightButtonDisabled = false;
let leftButtonDisabled = false;


// TEMP Variables
const userId = 1
const userUrl = `${usersUrl}/${userId}`

// Currentday
let currentDay = () => {
  let today = date.getDate()
  let year = date.getFullYear();
  let monthEl = document.getElementById(`${currentMonthNum}/${today}`)
  if (monthEl) {
    monthEl.className += " current"
  }
}

let titleMonth = () => {
  // Title
  monthTitle.innerText = `${displayedMonth}`
}

// Read


function getUsersIds(usersData) {
  return usersData.forEach(user => {
    let usersArray = []
    usersArray = usersArray.push(user.id)
  })
  return usersArray
}

const usersIds = () => {
  return fetch(usersUrl)
  .then(resp => resp.json())
  .then(usersData => getUsersIds(usersData))
}

usersIds()

const fetchUserEvents = () => {
  return fetch(userUrl)
  .then (resp => resp.json())
  .then (userData => {
    userData.events.forEach(event => {
      const monthId = event.month
      const dayId = event.day
      const modalBody = document.getElementById('modal-body')
      const dayBoxById = document.getElementById(`${monthId}/${dayId}`)
      const eventName = document.createElement('p')
      const eventMonth = document.createElement('p')
      const eventDay = document.createElement('p')
      const eventTime = document.createElement('p')
      eventName.innerText = `${event.time}:00` + " " + `${event.name}`
      eventMonth.innerText = event.month
      eventDay.innerText = event.day
      eventTime.innerText = `${event.time}:00`
      modalBody.appendChild(eventName)
      // debugger
      // dayBoxById.appendChild(eventName)
    })                  
  });
}

  
  
  const createDays = (monthModifier = 0) => {
    displayedMonthNum += monthModifier
    // debugger
    const firstDays2019 = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0]
    const startDay = firstDays2019[displayedMonthNum]
    const monthDays2019 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const numOfDays = monthDays2019[displayedMonthNum]
    let dayCounter = 1;
    
    for (let i = 0; i < 35; i++) {
      const dayBox = document.createElement('span')
      if (i >= startDay && dayCounter <= numOfDays) {
        dayBox.innerText = dayCounter
        dayBox.id = `${displayedMonthNum}/${dayCounter}`
        ++dayCounter
        dayBox.dataset.toggle = "modal"
        dayBox.dataset.target = "#myModal"
      }
      dayBox.className = "day"
      dayBoxes.append(dayBox)
    }
    currentDay()
    titleMonth()
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
    displayedMonth = month[displayedMonthNum + 1]
    monthTitle.innerText = displayedMonth
  }
  
  const decrementMonth = () => {
    displayedMonth = month[displayedMonthNum - 1]
    if(displayedMonthNum <= 0){
      // displayedMonthNum = 11
    }
    monthTitle.innerText = displayedMonth
  }
  
  // Hide and show buttons
  const hideNextButton = () => {
    nextButton.style.display = 'none';
    // center month title
  }
  
  const showNextButton = () => {
    nextButton.style.display = "inline";
    // center month title
  }

  const hidePreviousButton = () => {
    previousButton.style.display = 'none';
  }

  const showPreviousButton = () => {
    previousButton.style.display = 'inline';
  }

  // Change page
  nextButton.addEventListener('click', () => {
    if (displayedMonthNum + 1 === 11) {
      incrementMonth()
      removeDays()
      createDays(1)
      hideNextButton()
      rightButtonDisabled = true;
    } else {
      incrementMonth()
      removeDays()
      createDays(1)
    }

    if (leftButtonDisabled) {
      showPreviousButton()
    }
  })
    
    
    previousButton.addEventListener('click', () => {
      if (displayedMonthNum - 1 === 0) {
        rightButtonDisabled = false;
        decrementMonth()
        removeDays()
        createDays(-1)
        hidePreviousButton()
        leftButtonDisabled = true;
      } else {
        decrementMonth()
        removeDays()
        createDays(-1)
      }

      if (rightButtonDisabled) {
        showNextButton()
      }
    })
  
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
  createEventButton.addEventListener('click', () => {
    console.log('clicked');
  })
  
  
  // Update
  
  
  // Destroy
  
  
  // Click listeners
  
  
  // Function calls
  createDays()
  displayUser()
  // turnPage()
  fetchUserEvents()
  
  

