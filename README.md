# CrossOff - Todo List & Task Manager Tool
[CrossOff Live Site](http://www.mycrossoff.com/)

CrossOff is a full-stack web application that helps users create to-do lists and manage their tasks, inspired by TickTick.

This is the 1st version. Updates will come out in the future.

Update May 13, 2018:
- highlight the current list/task

Tech Stack:
- backend: Ruby on Rails, PostgreSQL
- frontend: JavaScript/React/Redux, HTML, JSX, SCSS

[Design Documents - CrossOff wiki](https://github.com/stellashen/cross-off/wiki)

![before login](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/splash.png)
![after login](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/main.png)

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

## Reuse Modal form component
`<Modal />` is nested directly under the `App` component. Technically it is always on the page, but we can make it show up or hide by calling `openModal` and `closeModal` actions:
```js
//modal_actions.js
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalName, listId) => {
  return {
    type: OPEN_MODAL,
    modal: { name: modalName, listId: listId }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
```

Because it is always on the page, I can use it whenever I need to, without thinking about route.

I used the same modal component for three forms: add list form, edit list form, and delete list form.

![add list](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/modal-add-list.png)
![edit list](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/modal-edit-list.png)
![delete list](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/modal-delete-list.png)

To do that, I just need to pass in the form type to the modal component as props. And then, in the modal, we find the right component by `switch...case...` conditional statements:

```js
// modal.jsx
//...more code...
if (!modal) {
  return null;
}
let component;
switch (modal.name) {
  case 'addListForm':
    component = <AddListFormContainer />;
    break;
  case 'editListForm':
    component = <EditListFormContainer listId={modal.listId}/>;
    break;
  case 'deleteList':
    component = <DeleteListContainer listId={modal.listId}/>;
    break;
  default:
    return null;
}
//...more code...
```

## Other Pages
#### Signup form
![signup form](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/signup.png)

#### Trash
![trash page](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/trash.png)

## Future Directions
Will add the following features:
- add a restore button for trash
- provide avatar image options
- cross off custom animation
- a toggle button to hide completed tasks

More features:
- tags
- search tasks by keyword

For readability & accessibility:
- implement responsive design (for larger screen, and mobile screen)
- provide language options
