class Task < ApplicationRecord
  validates :title, :list_id, :user_id, presence: true
  belongs_to :list
  belongs_to :user
  has_many :add_tags
end
