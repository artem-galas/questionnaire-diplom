class AddTypeQuestionFieldToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :type_question, :integer, default: 0
  end
end
