Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :pictures, except: [:show, :new, :edit]
    resources :users, only: [:show] do
      resources :pictures, only: [:show]
    end
  end
  root to: "static_pages#root"
end
