class AddIdsInStatistic < ActiveRecord::Migration
  def change
    add_column :statistics, :questionary_id, :integer
    add_column :statistics, :question_id, :integer
    add_column :statistics, :answer_id, :integer
  end
end
