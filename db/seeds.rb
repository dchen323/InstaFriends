# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Picture.delete_all

guest = User.create!({username: "gunther", name: "Gunther", password: 'password', img_url: 'https://images.tmz.com/2017/08/22/0822-james-michael-tyler-gunther-friends-now-photos-launch-3.jpg'})
ross = User.create!({username: 'dr_ross', name: "Ross Geller", password: "password1", img_url: "http://www.comedycentral.co.uk/sites/default/files/styles/image-w-1050-h-1050-scale/public/cc_uk/galleries/large/2016/06/30/09_ross_fuckboy.png?itok=KI_qW3xV"})
rachel = User.create!({username: 'rach', name: "Rachel Green", password: "password1",img_url: "https://vignette.wikia.nocookie.net/friends/images/5/58/Rachel_Green.jpg/revision/latest?cb=20120624152620"})
joey = User.create!({username: 'drake_ramoray', name: "Joey Tribbiani", password: "password1", img_url:"http://104.236.196.111/imdb//media/profile_images/Matt_LeBlanc__I_can_t_bear_to_watch_young_Joey_in_Friends.jpg"})
chandler = User.create!({username: 'bing', name: "Chandler Bing", password: "password1",img_url: "http://images4.fanpop.com/image/photos/22200000/Chandler-friends-22265398-500-373.png"})
monica = User.create!({username: 'chef_geller', name: "Monica Geller", password: "password1",img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSdYG_f20v4JrlxOleShzhMZ08dy7aXN0L-FTiWkePuJTrlY9Xg"})
phoebe = User.create!({username: 'smelly_cat', name: "Phoebe Buffay", password: "password1", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhYfuXjfK5Fe6K90Id-z2XjjykKuH6ciflmA3l8RBANdJOxn3Gw"})


picture1 = Picture.create!({img_url: 'https://i2.wp.com/theblast.com/wp-content/uploads/2018/01/0129_Central-Perk-Friends-Logo.jpg?fit=1024%2C768&ssl=1', user: guest, caption: "Welcome to Central Perk"})
picture2 = Picture.create!({img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYMKhLwJpO5z0Bnw3N3aa4cNMWm1JTFtiQpkxcGHNgDSB4Z_z', user: guest, caption: "Long week..."})
picture3 = Picture.create!({img_url: "https://media.timeout.com/images/103451632/630/472/image.jpg", user: guest, caption: "NYC"})

picture4 = Picture.create!({img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1XPFaUzneHMxJ1yXVTHqYd_6vjZfYXBAxbi_OZUVKboWmWDYyg', user: ross, caption: "Hoiday Armadillo"})
picture5 = Picture.create!({img_url: 'http://snappa.static.pressassociation.io/assets/2014/09/15092059/1410769259-d8a0b4715b5b24552f4071fcb34f06a2-600x361.jpg', user: ross, caption: "My favorite British sport"})
picture6 = Picture.create!({img_url: 'http://snappa.static.pressassociation.io/assets/2014/09/05161150/1409929908-fc15b2da4058134a9711b3ffaf8e2642-600x401.jpeg', user: ross, captions: "The guys"})

picture7 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/11103722/1410428242-2272a1e39062fe047ef4543265b447d1-600x338.jpg', user: rachel , caption: 'Me and Ross'})
picture8 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/05163550/1409931350-4c9a3b34d451a839727a07d07ddc2521-600x396.jpg', user: rachel , caption: 'Got a new assistant'})
picture9 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/04092949/1410792852-dca8c008ae14416c3152dc4c4d6488bd-600x384.jpg', user: rachel , caption: 'Emma'})

picture10 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/11104155/1410428515-49b8bd1f06f8f44f58533665efc6aaf5-600x338.jpg', user: joey , caption: 'JOEY DOESNT SHARE FOOD'})
picture11 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/15110419/1410775459-9476b0023c51b80f1acf1b6e01358a0b-600x416.jpg', user: joey , caption: 'ITS NOT TRUE'})
picture12 = Picture.create!({img_url:'https://imgix.bustle.com/rehost/2016/9/13/bd82246a-0edd-482c-aa3a-09147e062ed0.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70', user: joey , caption: 'How you doing?'})

picture13 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/04171832/1409847512-359c4dc7ee41554b001e94907825a4ab-600x404.jpg', user: chandler , caption: 'best day ever'})
picture14 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/12100933/1410512972-c4ba2cb0f560a46c8eca618d375e1ff6-600x398.jpg', user: chandler , caption: 'I married a turkey'})
picture15 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/12100931/1410512971-33d060d1390b2ffc7499084aa3f99458-600x350.jpg', user: chandler , caption: 'The best roomie'})

picture16 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/11103754/1410428273-ed487196b34c5a63c06d4a2b3ee4cce7-600x337.jpg', user: monica , caption: 'TBT'})
picture17 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/04171839/1409847519-69dce053717c444e908740acae753bfd-600x393.jpg', user: monica , caption: 'The routine'})
picture18 = Picture.create!({img_url:'http://snappa.static.pressassociation.io/assets/2014/09/05170003/1409932802-7d4bf3f1eb8b084a12effb736520d6d8-600x402.jpg', user: monica , caption: 'Getting Married!'})

picture19 = Picture.create!({img_url: 'http://snappa.static.pressassociation.io/assets/2014/09/11103742/1410428262-9e836c11b89bb82ab97779df44ce0140-600x338.jpg', user: phoebe, caption: "TRIPLETS"})
picture20 = Picture.create!({img_url: 'https://uproxx.files.wordpress.com/2015/07/phoebe-friends.jpg?quality=95&w=650', user: phoebe, caption: "smelly cat...smelly cat"})
picture21 = Picture.create!({img_url: 'http://images2.fanpop.com/images/photos/2900000/TOW-Phoebe-s-Wedding-10-12-phoebe-and-mike-2986019-700-525.jpg', user: phoebe , caption: "I GOT MARRIED"})
