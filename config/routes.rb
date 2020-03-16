Rails.application.routes.draw do
  root to: 'games#index'

  resources :games, only: [:index] do
    collection do
      get :times
      get :words
      get :results
      get :rules
    end
  end

end
