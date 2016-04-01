class AddTitleToQuestionary < ActiveRecord::Migration
  def change
    add_column :questionaries, :title, :string
  end
end
