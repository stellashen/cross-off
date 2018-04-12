json.todos do
  @todos.each do |task|
    json.set! task.id do
      json.partial! 'task', task: task
    end
  end
end

json.completed do
  @completed.each do |task|
    json.set! task.id do
      json.partial! 'task', task: task
    end
  end
end
