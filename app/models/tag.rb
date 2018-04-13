class Tag < ApplicationRecord
  validates :title, :task_id, :user_id, presence: true
  belongs_to :task
  belongs_to :user
end
