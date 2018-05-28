class Api::QuotesController < ApplicationController

  protect_from_forgery except: ['create']

    def index
      @quotes = Quote.where("content ilike '%cake%'") # sql injection?
      render json: @quotes
    end

    def create
      quotes = Quote.new
      quotes.content = params[:content]
      quotes.save
      render json: quotes
    end


end
