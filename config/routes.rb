Rails.application.routes.draw do
  root to: 'games#index'

  resources :games, only: [:index] 

  resources :times, only: [:index]

  resources :words, only: [:index]

  resources :results, only: [:index]

  resources :rules, only: [:index]

end
