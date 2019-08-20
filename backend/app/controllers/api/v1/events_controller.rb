module Api
  module V1
    class EventsController < ActionController::Base
      
      
      def index
        events = Event.all
        render json: events, exclude: [:created_at, :updated_at]
      end

      def show
        event = Event.find_by(id: params[:id])
        if event
          render json: event, include: [:users], exclude: [:created_at, :updated_at]
        else 
          render json: { message: 'No event found with that id' }
        end
      end


    end
  end
end
