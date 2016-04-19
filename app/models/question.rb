class Question < ActiveRecord::Base
  belongs_to :questionary
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers
end
