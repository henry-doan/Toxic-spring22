class CreateToxics < ActiveRecord::Migration[7.0]
  def change
    create_table :toxics do |t|
      t.string :title
      t.text :body
      t.string :image
      t.string :location

      t.timestamps
    end
  end
end
