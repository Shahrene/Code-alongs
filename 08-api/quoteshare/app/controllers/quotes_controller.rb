class QuotesController < ApplicationController

  def index
    @quotes = Quote.all
    render :index
  end



end
