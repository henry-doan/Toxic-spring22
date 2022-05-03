class AddDeletesInToToxics < ActiveRecord::Migration[7.0]
  def change
    change_column :toxics, :deletes_in, :integer
  end
end
