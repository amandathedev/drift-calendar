module Api
  module V1
    class EventsController < ActionController::Base
      # https://stackoverflow.com/questions/27098239/post-422-unprocessable-entity-in-rails-due-to-the-routes-or-the-controller/27098555
      skip_before_action :verify_authenticity_token
      
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

      def create
        user = User.find_by(name: params[:username])
        event = Event.create(name: params[:name], year: params[:year], month: params[:month], day: params[:day], time: params[:time])
        user.events << event
        render json: event
      end

      def destroy
        event = Event.find_by(id: params[:id])
        event.delete
        render json: {message: "Event deleted"}
      end

      def update
        event = Event.find_by(id: params[:id])
      end


    end
  end
end
