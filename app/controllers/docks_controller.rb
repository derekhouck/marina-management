class DocksController < ApplicationController
  before_action :set_dock, only: %i[show update destroy]

  # GET /docks
  def index
    @docks = Dock.all

    render json: @docks, include: ['boat'] # for including boat names in the dock table
  end

  # GET /docks/1
  def show
    render json: @dock
  end

  # POST /docks
  def create
    @dock = Dock.new(dock_params)

    if @dock.save
      render json: @dock, status: :created, location: @dock
    else
      render json: @dock.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /docks/1
  def update
    if @dock.update(dock_params)
      render json: @dock
    else
      render json: @dock.errors, status: :unprocessable_entity
    end
  end

  # DELETE /docks/1
  def destroy
    @dock.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_dock
    @dock = Dock.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def dock_params
    params.require(:dock).permit(:name)
  end
end
