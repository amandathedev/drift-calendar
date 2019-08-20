module Api
  module V1
    class UsersController < ActionController::Base
        def index
          users = User.all
          render json: users, exclude: [:created_at, :updated_at]
        end

        def show
          user = User.find_by(id: params[:id])
          if user
            render json: user, include: [:events], exclude: [:created_at, :updated_at]
          else 
            render json: { message: 'No user found with that id' }
          end
        end

      end
    end
  end  