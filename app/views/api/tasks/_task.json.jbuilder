json.extract! task, :id, :title, :description, :completed, :trash,
              :due_date, :user_id, :list_id, :created_at, :updated_at

json.age time_ago_in_words(task.created_at)
