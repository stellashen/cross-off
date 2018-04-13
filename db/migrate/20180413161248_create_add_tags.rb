class CreateAddTags < ActiveRecord::Migration[5.1]
  def change
    create_table :add_tags do |t|
      t.integer :task_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end

    add_index :add_tags, %i(task_id tag_id)
  end
end
