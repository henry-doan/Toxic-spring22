class AddDeletesInToToxic < ActiveRecord::Migration[7.0]
  def change
    add_column :toxics, :deletes_in, :string
  end
end
