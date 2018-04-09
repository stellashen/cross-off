class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.string :description
      t.boolean :completed, null: false
      t.boolean :trash, null: false
      t.datetime :due_date
      t.integer :user_id, null: false
      t.integer :list_id, null: false

      t.timestamps
    end
    add_index :tasks, %i(user_id list_id)
  end
end
