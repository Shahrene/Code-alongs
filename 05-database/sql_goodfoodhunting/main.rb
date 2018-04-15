
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'


def run_query(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)
  conn.close
  return result
end

get '/' do
  sql = 'SELECT * FROM dishes ORDER BY id;' #asce is default or dece
  @dishes = run_query(sql)
  erb :index
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  sql = "INSERT INTO dishes (name, img_url) VALUES ('#{ params[:name] }', '#{ params[:img_url]}');"
  run_query(sql)
  redirect to('/')

end

get '/dishes/:id' do
  sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
  results = run_query(sql)
  @dish = results.first
  @comments = run_query("SELECT * FROM comments WHERE dish_id = #{params[:id]};")
  erb :show
end

delete '/dishes' do
  sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  run_query(sql)
  redirect to('/')
end

get '/dishes/:id/edit' do
  result = run_query("SELECT * FROM dishes WHERE id = #{params[:id]};")
  @dish = result.first
  erb :edit
end

put '/dishes/:id' do
  sql = "UPDATE dishes SET name = '#{params[:name]}', img_url = '#{params[:img_url]}' WHERE id = #{params[:id]};"
  run_query(sql)
  redirect to("/dishes/#{params[:id]}")
end

post '/comments' do
  sql = "INSERT INTO comments (content, dish_id) VALUES ('#{ params[:content]}', '#{params[:dish_id] }');"
  run_query(sql)
  redirect to("/dishes/#{ params[:dish_id] }")
end
