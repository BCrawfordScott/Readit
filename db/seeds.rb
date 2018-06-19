# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

puts "Creating users..."

user1 = User.create(username: "LeslieKnope", email: "lknope@pawneeparks.gov", password: "waffles")
user2 = User.create(username: "RonSwanson", email: "rswanson@pawneeparks.gov", password: "waffles")
user3 = User.create(username: "BenWyatt", email: "bwyatt@pawneeparks.gov", password: "waffles")
user4 = User.create(username: "AprilLudgate", email: "aludgate@pawneeparks.gov", password: "waffles")
user5 = User.create(username: "AndyDweyer", email: "adweyer@pawneeparks.gov", password: "waffles")
