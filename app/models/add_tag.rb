class AddTag < ApplicationRecord
  validates :task_id, :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :task_id }
  belongs_to :task
  belongs_to :tag
  belongs_to :user,
             through: :task,
             source: :user

end
