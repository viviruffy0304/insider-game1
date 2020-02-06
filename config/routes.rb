Rails.application.routes.draw do
  root to: 'games#index'
  post 'games/new' => 'games#create'
  post 'titles/index' => 'titles#create'
  


  resources :games, only: [:index,:new,:create]
    
  resources :options, only: [:index]

  resources :titles, only: [:index,:create]

  resources :players, only: [:index,:show]

  resources :times, only: [:index]

  resources :votes, only: [:index]

  resources :results, only: [:index]

  resources :newgames, only: [:index]

end
