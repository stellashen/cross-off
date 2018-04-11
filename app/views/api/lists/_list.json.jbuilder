json.extract! list, :id, :name, :user_id

json.tasksIds list.tasks.pluck(:id)
