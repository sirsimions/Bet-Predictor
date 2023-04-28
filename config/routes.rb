Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'
  get '/', to: 'users#show'
  post '/signup', to: 'users#create'
  # delete '/destroy', to: "sessions#logout"
  # delete '/destroy', to: "users#logout"
  post "/login", to: "sessions#create"
  get "/authorized", to: "sessions#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
