class Api::ListsController < ApplicationController
  before_action :require_logged_in

  def index
    @lists = current_user.lists
    render :index
  end

  def show
    @list = current_user.lists.find(params[:id])
    @tasks = @list.tasks
    render :show
  end

  def create
    @list = List.new(list_params)
    @list.user_id = current_user.id

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = current_user.lists.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = current_user.lists.find(params[:id])

    if @list.destroy
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end
end
