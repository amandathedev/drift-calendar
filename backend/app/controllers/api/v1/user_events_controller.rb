module Api
  module V1
    class UserEventsController < ActionController::Base
        def index
          user_events = UserEvent.all
          render json: user_events, exclude: [:timestamps]
        end
      end
    end
  end  