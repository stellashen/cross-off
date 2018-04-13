class Task < ApplicationRecord
  validates :list_id, :user_id, presence: true
  belongs_to :list
  belongs_to :user
  has_many :add_tags, dependent: :destroy
  has_many :tags,
           through: :add_tags,
           source: :tag
end
