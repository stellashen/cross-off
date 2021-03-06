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
  img_url: "https://res.cloudinary.com/devleg/image/upload/v1538035179/defaultAvatar.png"
)

long_list = List.create!(
  name:"I am a long list name. But I can display myself just fine!",
  user_id: guest.id
)

homework = List.create!(
  name: "Homework",
  user_id: guest.id
)
shopping = List.create!(
  name: "Shopping",
  user_id: guest.id
)
places = List.create!(
  name: "Places",
  user_id: guest.id
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
  due_date:  "Sun, 14 Oct 2020 00:00:00 UTC +00:00",
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
# tasks in long list
task11 = Task.create!(
  title: "I am a long task title. Trying my best not to make myself ugly. Happy to see you here! (✪ω✪)",
  description: "You can change my size by dragging my right bottom corner. Remember to click the [Save Changes] buttton after making edits. Thank you for using CrossOff!",
  due_date:  "Sun, 14 Oct 2020 00:00:00 UTC +00:00",
  completed: false,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task12 = Task.create!(
  title: "Long title will also show up. I don't have a due date, so my width is different. (ˊᵒ̴̶̷̤ꇴᵒ̴̶̷̤ˋ)꒰",
  completed: false,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task13 = Task.create!(
  title: "Try scroll the page!",
  completed: false,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task14 = Task.create!(
  title: "scroll the middle section, or the right section",
  completed: false,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task15 = Task.create!(
  title: "long_title_without_space_will_be_hidden_on_the_right_",
  completed: false,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task16 = Task.create!(
  title: "Ah. I am crossed off.",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task17 = Task.create!(
  title: "Ah. I am also crossed off.",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task17 = Task.create!(
  title: "Scrolling...",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task18 = Task.create!(
  title: "Scrolling...",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task19 = Task.create!(
  title: "Scrolling...",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task20 = Task.create!(
  title: "Scrolling...",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task21 = Task.create!(
  title: "Scrolling...",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task22 = Task.create!(
  title: "Scrolling...",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
task23 = Task.create!(
  title: "Scrolling...",
  completed: true,
  trash: false,
  list_id: long_list.id,
  user_id: guest.id
)
