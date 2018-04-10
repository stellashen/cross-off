json.extract! list, :id, :name, :user_id

json.tasksIds list.tasks do |task|
  json.extract! task, :id
end
