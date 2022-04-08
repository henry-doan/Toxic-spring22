class AddUserNameAndFollowersAndFollowingAndVisitorsAndLocationToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :user_name, :string
    add_column :users, :followers, :integer
    add_column :users, :following, :integer
    add_column :users, :visitors, :integer
    add_column :users, :location, :string
  end
end
