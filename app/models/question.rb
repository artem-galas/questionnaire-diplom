class Question < ActiveRecord::Base
  belongs_to :questionary
  has_many :answers
end
