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


    #get products

        get '/products/:id' do
            get_product_by_id = Product.find(params[:id])
            get_product_by_id.to_json
        end

        get "/product" do
          all_products = Product.all
          all_products.to_json
        end

    # #get reviews

    #     get '/specializations/:id' do
    #         spec = Specialization.find(params[:id])
    #         spec.to_json
    #     end

    #     get "/specializations" do
    #         specs = Specialization.all
    #         specs.to_json
    #     end

    # #get users

    #     get '/pets/:id' do
    #         pet = Pet.find(params[:id])
    #         pet.to_json
    #     end
     
    #     get "/pets" do
    #         pets = Pet.all
    #         pets.to_json
    #     end
     

    # #post
    #     post '/doctors' do
    #         daktari = Doctor.create(  
    #         name: params[:name], 
    #         location: params[:location],
    #         license_number: params[:license_number], specialization: params[:specialization],phone_number: params[:phone_number],picture_link: params[:picture_link],years_of_experience: params[:years_of_experience])
    #         daktari.to_json
    #     end

    #   post '/specialization' do
    #     spec = Specialization.create(
    #       field_of_speciality: params[:field_of_speciality],
    #       doctor_id: params[:doctor_id],
    #       pet_id: params[:pet_id]
    #     )
    #     spec.to_json
    #   end

    #   post '/pets' do
    #     pet = Pet.create(
    #       name: params[:name],
    #       pet_type: params[:pet_type],
    #       age: params[:age],
    #       color: params[:color],
    #       specialization: params[:specialization],
    #       tag_number: params[:tag_number],
    #       pets_breed: params[:pets_breed],
    #       phone_number: params[:phone_number],
    #     )
    #     pet.to_json
    #   end


    # #delete

    #     delete '/doctors/:id' do
    #         delete_doc = Doctor.find(params[:id])
    #         delete_doc.destroy
    #         delete_doc.to_json
    #     end

    #     delete '/specializations/:id' do
    #         spec = Specialization.find(params[:id])
    #         spec.destroy
    #         spec.to_json
    #     end

    #     delete '/pets/:id' do
    #         pet = Pet.find(params[:id])
    #         pet.destroy
    #         pet.to_json
    #     end
end