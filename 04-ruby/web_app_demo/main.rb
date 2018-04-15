require 'sinatra'
require 'sinatra/reloader' #changes in main.rb does not require a restart of the server
require 'pry'


#url - localhost:4567/hello?name=codebusters
#? is called a query string
get '/' do
  welcome to the homepage
#params is a magic global hash
#binding.pry
  return "Hi #{params["name"]}"
end

get '/time' do
  return Time.now.to_s

end

get '/lucky_number' do
  "here is your lucky number: #{ rand(1..20) }"
end

# localhost:4567/multiply?num1=3&num2=5

get '/multiply' do
  result = params[:num1].to.f * [:num2].to_f
  "the result is #{result}"
end

get '/about' do
  @name = 'codebusters'
  erb(:some_page)
end
