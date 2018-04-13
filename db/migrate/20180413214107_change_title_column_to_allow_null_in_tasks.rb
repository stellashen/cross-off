class ChangeTitleColumnToAllowNullInTasks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :title
    add_column :tasks, :heading, :string
    rename_column :tasks, :heading, :title
  end
end
