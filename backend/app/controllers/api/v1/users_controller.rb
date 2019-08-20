module Api
  module V1
    class UsersController < ActionController::Base
        def index
          users = User.all
          render json: users, exclude: [:timestamps]
        end
      end
    end
  end  