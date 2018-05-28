Rails.application.routes.draw do
  resources :quotes
  end

  namespace :api do
    resources :quotes
  end

  post '/api/quotes', to: 'quotes#create'
