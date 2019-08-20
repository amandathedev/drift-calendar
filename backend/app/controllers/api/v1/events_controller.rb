module Api
  module V1
    class EventsController < ActionController::Base
      def index
        events = Event.all
        render json: events, exclude: [:timestamps]
      end
    end
  end
end
