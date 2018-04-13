class Api::AddTagsController < ApplicationController
  before_action :require_logged_in

  def index
    @add_tags = current_user.add_tags
    render :index
  end

  def show
    @add_tag = current_user.add_tags.find(params[:id])
    render :show
  end

  def create
    @add_tag = AddTag.new(tag_params)

    if @add_tag.save
      render :show
    else
      render json: @add_tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @add_tag = current_user.add_tags.find(params[:id])

    if @add_tag.destroy
      render :show
    else
      render json: @add_tag.errors.full_messages, status: 422
    end
  end

  private

  def add_tag_params
    params.require(:add_tag).permit(:tag_id, :task_id)
  end
end
