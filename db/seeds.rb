# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(username: "Ellen Ripley", email: "ripley@email.com", password: "awesome", password_confirmation: "awesome")
user2 = User.create(username: "Dwayne Hicks", email: "hicks@email.com", password: "foobar", password_confirmation: "foobar")

tips = Tip.create([{title:'Best Chicken Burger', description:'Chicken Elmaco junior', likes:2, user: user1},
  {title:'Second Best Burger', description:'Nothing but the second best. Kerrospurilainen', likes:1, user: user2}])
