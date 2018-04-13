class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :add_tags
end
