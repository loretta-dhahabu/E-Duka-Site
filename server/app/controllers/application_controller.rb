class ApplicationController < Sinatra::Base
    set :default_content_type, "application/json"
    # specialization :allow_methods, "GET, HEAD, POST, PUT, OPTIONS, DELETE"
    # set :allow_origin, "http:/localhost:3000"
     set :bind, '0.0.0.0'
  configure do
    enable :cross_origin
  end
  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end
  
  # routes...
  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

    # default route products
    get "/products" do
      products = Product.all
      products.to_json
    end
    # get product by id
    get "/products/:id" do
      products = Product.find(params[:id])
      products.to_json
    end
    # get all reviews
    get "/reviews" do
      reviews = Review.all
      reviews.to_json
    end
    # get review by id
    get "/reviews/:product_id" do
      review = Review.find(params[:product_id])
      review.to_json
    end
    # get all users
    get "/users" do
      users = User.all
      users.to_json
    end
    # get user by id
    get "/users/:id" do
      user = User.find(params[:id])
      user.to_json
    end
    
end