class ChangeDueDateToBeDatetimeInTasks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :due_date
    add_column :tasks, :due, :datetime
  end
end
