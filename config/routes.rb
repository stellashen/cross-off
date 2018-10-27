Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq:: Web => "/sidekiq"
  
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: %i(create destroy show)
    resources :lists, only: %i(index show create update destroy)
    resources :tasks, only: %i(index show create update destroy)
    resources :tags, only: %i(index show create)
    resources :add_tags, only: %i(index show create destroy)
  end
  root "static_pages#root"
end
