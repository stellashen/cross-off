class AddColumnToTags < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :task_id, :integer, null: false
    add_column :tags, :user_id, :integer, null: false
  end
end
