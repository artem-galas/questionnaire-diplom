class Question < ActiveRecord::Base
  belongs_to :questionary
  has_many :answers, -> {order("id ASC")}, dependent: :destroy
  accepts_nested_attributes_for :answers, allow_destroy: true
  enum type_question: [:one_select, :multi_select]
end
