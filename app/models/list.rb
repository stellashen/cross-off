class List < ApplicationRecord
  validates :name, :user_id, presence: true
  validates :name, uniqueness: true
  belongs_to :user
  has_many :tasks, dependent: :destroy
end
