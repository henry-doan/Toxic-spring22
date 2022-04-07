class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :user_name
      t.integer :followers
      t.integer :following
      t.integer :visitors
      t.string :location
      t.string :image

      t.timestamps
    end
  end
end
