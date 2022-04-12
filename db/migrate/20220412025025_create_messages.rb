class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :title
      t.text :body
      t.string :image
      t.string :location

      t.timestamps
    end
  end
end
