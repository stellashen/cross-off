class RemoveColumnFromTags < ActiveRecord::Migration[5.1]
  def change
    remove_column :tags, :task_id
    remove_column :tags, :user_id
  end
end
