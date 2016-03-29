Rails.application.routes.draw do
  devise_for :users
  root 'landing#index'
  # get '*path' => 'landing#index'
  # get '/landing' => 'landing#index'
end
