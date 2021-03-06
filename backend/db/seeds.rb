# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Events
Event.create(
  name: "Dentist Appointment",
  year: 2019,
  month: 8,
  day: 17,
  time: 11
)

Event.create(
  name: "Birthday Party",
  year: 2019,
  month: 8,
  day: 9,
  time: 14
)

Event.create(
  name: "Parent-Teacher Conferences",
  year: 2019,
  month: 8,
  day: 29,
  time: 17
)


Event.create(
  name: "Doctor Appointment",
  year: 2019,
  month: 8,
  day: 14,
  time: 11
)

Event.create(
  name: "Anniversary Dinner",
  year: 2019,
  month: 8,
  day: 6,
  time: 20
)

Event.create(
  name: "Playdate",
  year: 2019,
  month: 8,
  day: 22,
  time: 8
)

Event.create(
  name: "Hair appointment",
  year: 2019,
  month: 8,
  day: 5,
  time: 8
)

Event.create(
  name: "Concert",
  year: 2019,
  month: 8,
  day: 2,
  time: 8
)

Event.create(
  name: "Bake Sale",
  year: 2019,
  month: 8,
  day: 3,
  time: 8
)

Event.create(
  name: "Pool party",
  year: 2019,
  month: 8,
  day: 22,
  time: 8
)

Event.create(
  name: "Library books due",
  year: 2019,
  month: 8,
  day: 30,
  time: 8
)

Event.create(
  name: "Karate Class",
  year: 2019,
  month: 8,
  day: 6,
  time: 8
)


# Users
User.create(
  name: "Helen Parr",
  email: "helenparr@gmail.com",
  img_url: "https://img.buzzfeed.com/buzzfeed-static/static/2016-08/10/13/enhanced/buzzfeed-prod-web04/original-grid-image-17681-1470848833-1.jpg?crop=411:617;14,8&downsize=400:*&output-format=auto&output-quality=auto"
)

User.create(
  name: "Bob Parr",
  email: "bobparr@gmail.com",
  img_url: "http://asg.animatedheroes.com/albums/incredible/Bob_headshot.jpg"
)


User.create(
  name: "Violet Parr",
  email: "violetparr@gmail.com",
  img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Violet_Parr.jpg/220px-Violet_Parr.jpg"
)

User.create(
  name: "Dash Parr",
  email: "dashparr@gmail.com",
  img_url: "https://vignette.wikia.nocookie.net/pixar/images/a/a5/I2_-_Dash.png/revision/latest?cb=20180621012105"
)

User.create(
  name: "Jack-Jack Parr",
  email: "jjparr@gmail.com",
  img_url: "https://vignette.wikia.nocookie.net/pixar/images/4/41/I2_-_Jack-Jack.png/revision/latest?cb=20180621022350"
)




# User Events
50.times do 
  UserEvent.create(
    user_id: rand(1..5),
    event_id: rand(1..12)
  )
end