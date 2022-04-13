class CreateToxics < ActiveRecord::Migration[7.0]
  def change
    create_table :toxics do |t|
      t.datetime :deletes_in
      t.text :desc
      t.string :images
      t.string :location
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
