Rails.application.routes.draw do
  devise_for :users
  root 'landing#index'
  resources :users do
    collection do
      get :profile
      resources :questionaries do
        resources :questions
      end
    end
  end
  # Route for public qurstionary
  get '/questionaries/:id' => 'questionaries#show'


  resources :statistics

end
