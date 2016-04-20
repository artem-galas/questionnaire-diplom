class Statistic < ActiveRecord::Base
  belongs_to :questionary
  belongs_to :answer
  belongs_to :questions
end
