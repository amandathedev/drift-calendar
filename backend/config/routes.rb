Rails.application.routes.draw do
  resources :user_events
  resources :events, except: :create
  resources :users
  namespace :api do
    namespace :v1 do
      resources :users
      resources :events
      resources :user_events
      post '/create_new_user_event/:username', to: 'events#create'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
