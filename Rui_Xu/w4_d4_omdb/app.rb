require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require './dat_IO'


get "/" do
  erb :index
end

get "/search" do
  erb :search
end

get "/result" do

  url = "http://www.omdbapi.com/?t=#{params[:movie]}"
  puts "#{params[:movie]}" #""

  @result = HTTParty.get(url)
  new_movie = Movie.new(@result)
    binding.pry
  erb :result
end


#
#
