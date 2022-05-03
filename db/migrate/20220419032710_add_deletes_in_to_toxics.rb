class AddDeletesInToToxics < ActiveRecord::Migration[7.0]
  def change
    remove_column :toxics, :deletes_in
    add_column :toxics, :deletes_in, :integer
  end
end
