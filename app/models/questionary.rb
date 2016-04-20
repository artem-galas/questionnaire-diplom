class Questionary < ActiveRecord::Base
  belongs_to :users
  has_many :questions
  has_one :statistic
  accepts_nested_attributes_for :questions, allow_destroy: true
end
