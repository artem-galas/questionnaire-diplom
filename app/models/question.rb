class Question < ActiveRecord::Base
  belongs_to :questionary
  has_many :answers, dependent: :destroy
  has_many :statistics, dependent: :destroy
  accepts_nested_attributes_for :answers, allow_destroy: true
end
