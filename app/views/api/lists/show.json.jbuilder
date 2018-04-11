json.list do
  json.partial! 'api/lists/list', list: @list
end

json.tasks do
  @tasks.each do |task|
    json.set! task.id do
      json.partial! 'api/tasks/task', task: task
    end
  end
end
