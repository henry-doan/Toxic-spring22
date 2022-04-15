class RenameImagesToImage < ActiveRecord::Migration[7.0]
  def change
    rename_column :toxics, :images, :image
  end
end
