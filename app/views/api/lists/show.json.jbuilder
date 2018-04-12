json.list do
  json.partial! 'api/lists/list', list: @list
end

json.tasks do
  json.todos do
    @todos.each do |task|
      json.set! task.id do
        json.partial! 'api/tasks/task', task: task
      end
    end
  end

  json.completed do
    @completed.each do |task|
      json.set! task.id do
        json.partial! 'api/tasks/task', task: task
      end
    end
  end
end
