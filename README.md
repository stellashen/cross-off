# CrossOff - Your Task Management Assistant
[CrossOff Live Site](https://cross-off-app.herokuapp.com)

CrossOff is a full-stack web application that helps users create to-do lists and manage their tasks, inspired by TickTick.

Tech Stack:
- backend: Ruby on Rails, PostgreSQL
- frontend: JavaScript/React/Redux, HTML, JSX, SCSS

[Design Documents - CrossOff wiki](https://github.com/stellashen/cross-off/wiki)

![dashboard](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/1.png)
![dashboard](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/2.png)
![dashboard](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/3.png)

## Features
#### User authentication:
+ encrypt the password using BCrypt
+ redirect url path using AuthRoute and ProtectedRoute.

#### Create and manage lists, tasks
+ Users can add/edit/remove lists
+ Users can click a list on the sidebar to navigate to the list page
+ On the list page, users can add tasks. Tasks are listed under "todos" category by default.
+ Users can move tasks to trash
+ Users can check the checkbox before a task to cross it off => completed tasks will be listed under the "Completed" category
+ Users can uncheck the checkbox to move the task back to the "todos" category

#### Add details to the tasks
+ Users can click a task title to view its details
+ Users can add due date to a task, and due date will show up next to the task title in the list view
+ Users can update the task details

## Future Directions
Will add the following features:
- add a restore button for trash
- welcome email & email confirmation
- highlight the current list/task
- a toggle button to hide completed tasks

More features:
- tags
- search tasks by keyword

For readability & accessibility:
- responsive design
- language options
