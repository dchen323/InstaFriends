# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Picture.delete_all

guest = User.create!({username: "gunther", name: "Gunther", password: 'password'})
ross = User.create!({username: 'dr_ross', name: "Ross Geller", password: "password1"})
rachel = User.create!({username: 'rach', name: "Rachel Green", password: "password1"})
joey = User.create!({username: 'drake_ramoray', name: "Joey Tribbiani", password: "password1"})
chandler = User.create!({username: 'bing', name: "Chandler Bing", password: "password1"})
monica = User.create!({username: 'chef_geller', name: "Monica Geller", password: "password1"})
phoebe = User.create!({username: 'smelly_cat', name: "Phoebe Buffay", password: "password1"})


picture_test = Picture.create!({img_url: 'http://www.qygjxz.com/data/out/193/5506447-random-picture.jpg', user: guest, caption: "test"})
