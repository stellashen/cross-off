export const addTask = task => (
  $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: { task }
  })
);

export const deleteTask = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${id}`
  })
);

export const updateTask = task => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  })
);

export const fetchTasks = (isTrashed) => (
  $.ajax({
    method: 'GET',
    url: '/api/tasks',
    data: { isTrashed: isTrashed }
  })
);

export const fetchTask = id => (
  $.ajax({
    method: 'GET',
    url: `/api/tasks/${id}`,
  })
);
