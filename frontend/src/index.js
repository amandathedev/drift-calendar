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

let userEvents = []
let userEventMarkers = []
let selectedUser


// New event form
// let modalContainer = document.getElementById('createModal')
let newEventName = document.getElementById('new-event-name')
let radioChoices = document.getElementsByName('person-select')
let newEventMonth = document.getElementById('new-event-month')
let newEventDay = document.getElementById('new-event-day')
let newEventTime = document.getElementById('new-event-time')
let newEventSubmit = document.getElementById('new-event-submit')
newEventSubmit.addEventListener('click', () => {
  createNewEvent();
})

// Edit existing event form

let editEventName = document.getElementById('edit-event-name')
let editRadioChoices = document.getElementsByName('edit-person-select')
let editEventMonth = document.getElementById('edit-event-month')
let editEventDay = document.getElementById('edit-event-day')
let editEventTime = document.getElementById('edit-event-time')
let editEventSubmit = document.getElementById('edit-event-submit')
// editEventSubmit.addEventListener('click', () => {
//   createNewEvent();
// })

function setEditFormValues(myEvent) {
  editEventName.value = myEvent.name
  editRadioChoices.value = myEvent.radioChoices
  editEventMonth.value = myEvent.month
  editEventDay.value = myEvent.day
  editEventTime.value = myEvent.time
} 





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
let userId = 1
let userUrl = `${usersUrl}/${userId}`

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

const fetchUserEvents = () => {
  return fetch(userUrl)
  .then (resp => resp.json())
  .then (userData => {
    userEvents = []
    userData.events.forEach(event => {
      userEvents.push(event)
    })                  
    addEventMarker();
  });
}


// https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_modal&stacked=h
const createDays = (monthModifier = 0) => {
  displayedMonthNum += monthModifier
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
    selectedUser = event.target.parentNode.parentNode
    userId = selectedUser.id
    userUrl = `${usersUrl}/${userId}`
    fetchUserEvents();
    if (selectedUser.id == 1) {
      let color1 = 'rgb(' + 255 + ',' + 99 + ',' + 99 + ')';
      document.body.style.backgroundColor = color1;
      title.style.color = color1;
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
  })
}

const incrementMonth = () => {
  displayedMonth = month[displayedMonthNum + 1]
  monthTitle.innerText = displayedMonth
  
}

const decrementMonth = () => {
  displayedMonth = month[displayedMonthNum - 1]
  monthTitle.innerText = displayedMonth
}

// Hide and show buttons
const hideNextButton = () => {
  nextButton.style.display = 'none';
}

const showNextButton = () => {
  nextButton.style.display = "inline";
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
    addEventMarker()
    rightButtonDisabled = true;
  } else {
    incrementMonth()
    removeDays()
    createDays(1)
    addEventMarker()
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
    addEventMarker()
    leftButtonDisabled = true;
  } else {
    decrementMonth()
    removeDays()
    createDays(-1)
    addEventMarker()
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

//event listener for days
const clickDays = () => {
  dayBoxes.addEventListener('click', () => {
    let foundEvent = false;
    const dayId = event.srcElement.id
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = ''
    // If there's an event for this day
    userEvents.forEach(myEvent => {
      if (dayId.split("/")[1] == myEvent.day && dayId.split("/")[0] == myEvent.month - 1) {
        
        // const eventName = document.createElement('p')
        // eventName.innerText = `${myEvent.time}:00` + ' ' + `${myEvent.name}`
        // modalBody.appendChild(eventName)
        const eventName = document.createElement('p')
        eventName.innerHTML = `
        <span id="${myEvent.id}">${myEvent.time}:00` + ' ' + `${myEvent.name}</span>
        
        <button class="btn btn-danger deleteButtons">Delete</button>
        `

        modalBody.appendChild(eventName, deleteButtons)
        $(`#edit-modal-${myEvent.id}`).click(() => setEditFormValues(myEvent))
        foundEvent = true;
        buttonFunc(myEvent)
      }
      
    })
    console.log(foundEvent);
    if (!foundEvent) {
      // TODO change top margin of day modal
      $("#create-event").click()
      setTimeout(() => {
        $("#close-day-modal").click()
      }, 500)
    }

  })
}


let deleteButtons = document.getElementsByClassName('deleteButtons')
let editButtons = document.getElementsByClassName('editButtons')

const buttonFunc = (myEvent) => {
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      deleteEvent(event)
    })
  }

  for(let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', () => {
      
      editEvent(myEvent)
      setTimeout(() => {
        $("#close-day-modal").click()
      }, 500)
    })
  }
}

// eventMarker on days 
// TODO Fetch all users events on home click
function addEventMarker() {
  userEventMarkers.forEach(node => {
    node.remove()
  })
  userEventMarkers = []
  userEvents.forEach(event => {
    const dayId = event.day
    console.log("day" + dayId);
    const monthId = event.month - 1
    console.log("month" + monthId);
    console.log(event);
    const dayToAddMarkerTo = document.getElementById(`${monthId}/${dayId}`)
    const eventMarker = document.createElement('p')
    eventMarker.innerText = '*'
    dayToAddMarkerTo.appendChild(eventMarker)
    userEventMarkers.push(eventMarker)
  })
}
  
// Create new event
const createNewEvent = () => {
  event.preventDefault();
  newEventName.placeholder = "Add event"
  let newEventUser
  
  for(let i = 0, length = radioChoices.length; i < length; i++) {
    if(radioChoices[i].checked) {
      newEventUser = radioChoices[i].value
    }
  }
  
  fetch(rootUrl + '/create_new_user_event/' + newEventUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: newEventName.value,
      year: 2019,
      month: newEventMonth.value,
      day: newEventDay.value,
      time: newEventTime.value,
    })
  })
  .then(resp => resp.json())
    .then(event => {
      userEvents.push(event)
      fetchUserEvents()
      addEventMarker()
    })
    // .catch(alert)
  }

// Destroy Post
function deleteEvent(event) {
  event_id = event.target.parentNode.childNodes[1].id
  fetch(eventsUrl + "/" + event_id, {
    method: "DELETE"
  }).then(resp => {
    event.target.parentNode.remove()
    // $("#close-day-modal").click()
    fetchUserEvents()
    $("#close-day-modal").click()
    // addEventMarker()
  })
}

// Edit
const editEvent = (event) => {
  console.log(event);
}

// Update
const updateEvent = (event) => {
  console.log('got here');
  event_id = event.target.parentNode.childNodes[1].id
  fetch(eventsUrl + "/" + event_id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: newEventName.value,
      year: 2019,
      month: newEventMonth.value,
      day: newEventDay.value,
      time: newEventTime.value,
    })
  }).then(resp => {
    console.log(resp);
  })
}
  
// Function calls
createDays()
displayUser()
fetchUserEvents()
clickDays()