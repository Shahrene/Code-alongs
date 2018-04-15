require 'sinatra'
require 'sinatra/reloader' #changes in main.rb does not require a restart of the server
require 'pry'

$emails = ['cake@pudding.com', 'shaz@shazbaby.com']

get '/' do
  erb :home
end


get '/admin' do
  @emails = $emails
  erb :admin
end


get '/process' do
  $emails.push(params[:email])
end
