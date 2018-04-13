class ChangeDueDateToBeStringInTasks < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :due_date, :string
  end
end
