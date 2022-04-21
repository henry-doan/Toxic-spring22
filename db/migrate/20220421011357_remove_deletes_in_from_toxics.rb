class RemoveDeletesInFromToxics < ActiveRecord::Migration[7.0]
  def change
    remove_column :toxics, :deletes_in, :datetime
  end
end
