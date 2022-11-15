# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1.upto(100) do |i|
    User.create(username: "User#{i}", email: "user#{i}@exam.com", password: "password!")
 end

1.upto(100) do |i|
    Item.create(title: "Item#{i}", description: "test", user_id: i)
end

1.upto(100) do |i|
    Comment.create(body: "Comment#{i}", item_id: i, user_id: i)
end