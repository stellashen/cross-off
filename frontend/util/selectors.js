export const selectCompleteTasks = (tasks) => {
  if (Object.keys(tasks).length === 0) return [{}, {}];
  const tasksHashArr = Object.values(tasks);
  const completed = tasksHashArr.filter(task => task.completed === true);
  const todos = tasksHashArr.filter(task => task.completed === false);
  return [completed, todos];
};
