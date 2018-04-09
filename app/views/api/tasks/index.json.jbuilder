@tasks.each do |task|
  json.set! task.id do
    json.partial! 'task', task: task
  end
end
