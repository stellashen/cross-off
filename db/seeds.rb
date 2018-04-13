# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
List.destroy_all
Task.destroy_all

guest = User.create!(
  username: "guest",
  email: "guest@crossoff.com",
  password: "password",
  img_url: "assets/defaultAvatar.png"
)

login(guest)

homework = List.create!(
  name: "Homework"
)
shopping = List.create!(
  name: "Shopping"
)
places = List.create!(
  name: "Places"
)

task1 = Task.create!(
  title: "refactor code",
  description: "write task detail page",
  completed: false,
  trash: false,
  list_id: homework.id,
  user_id: guest.id
)

task2 = Task.create!(
  title: "learn d3",
  description: "online materials",
  due_date:  "Sun, 14 Oct 2018 00:00:00 UTC +00:00",
  completed: false,
  trash: false,
  list_id: homework.id,
  user_id: guest.id
)
task3 = Task.create!(
  title: "buy milk",
  completed: false,
  trash: true,
  list_id: shopping.id,
  user_id: guest.id
)
task4 = Task.create!(
  title: "orange",
  completed: false,
  trash: false,
  list_id: shopping.id,
  user_id: guest.id
)
task5 = Task.create!(
  title: "eggs",
  completed: false,
  trash: false,
  list_id: shopping.id,
  user_id: guest.id
)
task6 = Task.create!(
  title: "banana",
  completed: true,
  trash: false,
  list_id: shopping.id,
  user_id: guest.id
)
task7 = Task.create!(
  title: "Palo Alto",
  completed: false,
  trash: false,
  list_id: places.id,
  user_id: guest.id
)
task8 = Task.create!(
  title: "Sunnyvale",
  completed: true,
  trash: false,
  list_id: places.id,
  user_id: guest.id
)
task9 = Task.create!(
  title: "New York",
  completed: false,
  trash: false,
  list_id: places.id,
  user_id: guest.id
)
task10 = Task.create!(
  title: "Bay Area",
  completed: true,
  trash: true,
  list_id: places.id,
  user_id: guest.id
)
