class RenameColumnInTasks < ActiveRecord::Migration[5.1]
  def change
    rename_column :tasks, :due, :due_date
  end
end
