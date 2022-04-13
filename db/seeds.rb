# i = 1

# 5.times do
#   @user = User.create(
#     email: "test#{i}@email.com",
#     password: 'password',
#     # fname: "test#{i}",
#     # lname: "testing#{i}",
#     # age: i,
#     image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
#   )
#   i += 1

#   20.times do
#     Toxic.create(
#       desc: Faker::Creature::Cat.name, 
#       location: Faker::Creature::Cat.breed,
#       user_id: @user.id
#     )
#   end
# end

# puts 'data seeded'