puts "Seeding begin ......."

#products data
puts "Seeding products table....."
product_1 = Product.create(title:"Bag", description:"this is our bag", price:34.50)
20.times do product_1
end

#reviews data
puts "Seeding reviews table ....."
review_1 = Review.create(review_content:"it's a great product..i love it!", product_id: product_1.id, user_id: user_1.id)
40.times do review_1
end

#users data
puts "Seeding users table ....."
user_1 = User.create(username:"Marion", email: "marion12@gmail.com", password: "2521636")
10.times do user_1
end

puts "Seeding end ....."
