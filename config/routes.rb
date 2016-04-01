Rails.application.routes.draw do
  devise_for :users
  root 'landing#index'
  resources :users do
    member do
      get :profile
    end
    resources :questionaries
  end

end
