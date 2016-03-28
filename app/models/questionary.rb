class Questionary < ActiveRecord::Base
  belongs_to :users
  has_many :questions
end
