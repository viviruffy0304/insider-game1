Rails.application.routes.draw do
  root to: 'games#index'

  resources :games, only: [:index,:new] 

  resources :options, only: [:index]

  resources :titles, only: [:index]

  resources :times, only: [:index]

end
