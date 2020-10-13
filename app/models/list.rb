class List < ApplicationRecord
  acts_as_list scope: :user

  belongs_to :user

  validates :name, presence: true

  has_many :cards, -> { order(position: :asc) }, dependent: :destroy
end
