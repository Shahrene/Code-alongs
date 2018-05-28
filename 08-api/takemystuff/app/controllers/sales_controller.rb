class SalesController < ApplicationController

  def new
    @sale = Sale.new
  end

  def create
    sale = Sale.new(sale_params) #params mass assignment & strong params
    sale.user_id = User.first.id #fix later
    sale.save
    redirect_to "/sales/#{sale.id}"
  end

  def show
    @sale = Sale.find(params[:id])
  end

  def destroy
    sale = Sale.find(params[:id])
    sale.destroy
    redirect_to '/'
  end

  def edit
    @sale = Sale.find(params[:id])
  end

  def update
    sale = Sale.find(params[:id])
    sale.description = params[:description]
    sale.address = params[:address]
    sale.save
    redirect_to "/sales/#{sale.id}"
end

  def index
    @sales = Sale.all
  end

  def sale_params
    params.require(:sale).permit(:description, :address, {images: []})
  end
end
