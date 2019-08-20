module Api
  module V1
    class UserEventsController < ActionController::Base
        def index
          user_events = UserEvent.all
          render json: user_events, exclude: [:created_at, :updated_at]
        end
      end
    end
  end  