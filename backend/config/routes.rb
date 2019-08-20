Rails.application.routes.draw do
  resources :user_events
  resources :events
  resources :users
  namespace :api do
    namespace :v1 do
      resources :users
      resources :events
      resources :user_events
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
