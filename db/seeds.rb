# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Picture.delete_all

guest = User.create!({username: "gunther", name: "Gunther", password: 'password', img_url: 'https://s33.postimg.cc/c6qumv1u7/gunther_profile.jpg'})
ross = User.create!({username: 'dr_ross', name: "Ross Geller", password: "password1", img_url: "https://s20.postimg.cc/3yfw6ltnh/ross_profile.png"})
rachel = User.create!({username: 'rach', name: "Rachel Green", password: "password1",img_url: "https://s20.postimg.cc/ngajmk60t/Rachel_Green_profile.jpg"})
joey = User.create!({username: 'drake_ramoray', name: "Joey Tribbiani", password: "password1", img_url:"https://s20.postimg.cc/6frndw8f1/joey_profile.jpg"})
chandler = User.create!({username: 'bing', name: "Chandler Bing", password: "password1",img_url: "https://s20.postimg.cc/50q2p6uh9/chandle_profile.jpg"})
monica = User.create!({username: 'chef_geller', name: "Monica Geller", password: "password1",img_url: "https://s20.postimg.cc/uw9t8ebql/monica_profile.jpg"})
phoebe = User.create!({username: 'smelly_cat', name: "Phoebe Buffay", password: "password1", img_url: "https://s20.postimg.cc/sey214zjx/phoebe_profile.jpg"})


picture1 = Picture.create!({img_url: 'https://s20.postimg.cc/qzwhcf66l/picture1.jpg', user: guest, caption: "Welcome to Central Perk"})
picture4 = Picture.create!({img_url: 'https://s20.postimg.cc/50q2p7x25/picture4.jpg', user: ross, caption: "Holiday Armadillo!"})
picture7 = Picture.create!({img_url:'https://s20.postimg.cc/dvqwzr8zx/picture_7.jpg', user: rachel , caption: 'Me and Ross'})
picture10 = Picture.create!({img_url:'https://s20.postimg.cc/kyysfdtv1/picture_10.jpg', user: joey , caption: 'JOEY DOESNT SHARE FOOD'})
picture13 = Picture.create!({img_url:'https://s20.postimg.cc/x0u69jat9/picture_13.jpg', user: chandler , caption: 'best day ever'})
picture16 = Picture.create!({img_url:'https://s20.postimg.cc/c3xy4vki5/picture_16.jpg', user: monica , caption: 'TBT'})
picture19 = Picture.create!({img_url: 'https://s20.postimg.cc/ysn54g9lp/picture_19.jpg', user: phoebe, caption: "TRIPLETS"})

picture2 = Picture.create!({img_url: 'https://s20.postimg.cc/k9g031vwd/picture_2.jpg', user: guest, caption: "Long week..."})
picture5 = Picture.create!({img_url: 'https://s20.postimg.cc/87km8wudp/picture_5.jpg', user: ross, caption: "My favorite British sport"})
picture8 = Picture.create!({img_url:'https://s20.postimg.cc/pkuwnrxel/picture_8.jpg', user: rachel , caption: 'Got a new assistant'})
picture11 = Picture.create!({img_url:'https://s20.postimg.cc/dizitn3lp/picture_11.jpg', user: joey , caption: 'ITS NOT TRUE'})
picture14 = Picture.create!({img_url:'https://s20.postimg.cc/wbbdx87pp/picture_14.jpg', user: chandler , caption: 'I married a turkey'})
picture17 = Picture.create!({img_url:'https://s20.postimg.cc/wo2s3exp9/picture_17.jpg', user: monica , caption: 'The routine'})
picture20 = Picture.create!({img_url: 'https://s20.postimg.cc/iuefedctp/picture_20.jpg', user: phoebe, caption: "smelly cat...smelly cat"})

picture3 = Picture.create!({img_url: "https://s20.postimg.cc/c3xy4yzyl/picture_3.jpg", user: guest, caption: "NYC"})
picture6 = Picture.create!({img_url: 'https://s20.postimg.cc/uw9t8k42l/picture_6.jpg', user: ross, caption: "Vegas"})
picture9 = Picture.create!({img_url:'https://s20.postimg.cc/nt1xsy6ct/picture_9.jpg', user: rachel , caption: 'Emma'})
picture12 = Picture.create!({img_url:'https://s20.postimg.cc/5q8v1qpxp/picture_12.jpg', user: joey , caption: 'How you doing?'})
picture15 = Picture.create!({img_url:'https://s20.postimg.cc/m18yy2a59/picture_15.jpg', user: chandler , caption: 'The best roomie'})
picture18 = Picture.create!({img_url:'https://s20.postimg.cc/ovc4bik19/picture_18.jpg', user: monica , caption: 'Getting Married!'})
picture21 = Picture.create!({img_url: 'https://s20.postimg.cc/ujif2ew3h/picture_21.jpg', user: phoebe , caption: "I GOT MARRIED"})
