class AddColumnToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :answer_count, :integer, :default => 0
  end
end
