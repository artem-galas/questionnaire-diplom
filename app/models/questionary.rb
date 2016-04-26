class Questionary < ActiveRecord::Base
  belongs_to :users
  has_many :questions, -> {order("id ASC")}, dependent: :destroy
  accepts_nested_attributes_for :questions, allow_destroy: true
end
