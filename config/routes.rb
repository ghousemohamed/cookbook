Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root "react#index"
  get "/*path" => "react#index"
end
