class TitlesController < ApplicationController

  def index
    @gm = Gm.new
    
  end

  def create
    Gm.create(gm_params)
    @gms = Gm.select("title")
  end

  private
  def gm_params
    params.permit(:title)
  end
end
