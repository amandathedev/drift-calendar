module Api
  module V1
    class UserEventsController < ActionController::Base
        def index
          user_events = UserEvent.all
          render json: user_events, exclude: [:created_at, :updated_at]
        end

        def show
          user_event = UserEvent.find_by(id: params[:id])
          if user_event
            render json: user_event #, include: [:user_id.name], exclude: [:created_at, :updated_at]
          else 
            render json: { message: 'No user_event found with that id' }
          end
        end
      end
    end
  end  