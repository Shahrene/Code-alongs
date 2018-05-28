Rails.application.routes.draw do


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #resources : sales, except: [delete] <--- also creates the same routes, except ...
get '/sales/new', to: 'sales#new'
post '/sales', to: 'sales#create'
get '/sales/:id', to: 'sales#show'

delete '/sales/:id', to: 'sales#destroy'
get '/sales/:id/edit', to: 'sales#edit'
put '/sales/:id', to: 'sales#update'
get '/sales', to: 'sales#index'

#bcrypt, update user model...
get '/login', to: 'session#new'
post '/session', to: 'session#create'
delete '/session', to: 'session#destroy'

get '/about', to: 'pages#about_us'
get '/', to: 'pages#home'



end
