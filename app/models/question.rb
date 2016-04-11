class Question < ActiveRecord::Base
  belongs_to :questionary
  has_many :answers
  accepts_nested_attributes_for :answers
end
