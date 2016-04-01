class Questionary < ActiveRecord::Base
  belongs_to :users
  has_many :questions
  accepts_nested_attributes_for :questions
end
