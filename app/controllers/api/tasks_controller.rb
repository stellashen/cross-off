class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def index
    @tasks = current_list.tasks
    render :index
  end

  def show
    @task = current_list.tasks.find(params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    @task.list_id = current_list.id

    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = current_list.tasks.find(params[:id])

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = current_list.tasks.find(params[:id])

    if @task.destroy
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private

  def current_list
    current_user.lists.find(params[:list_id])
  end

  def task_params
    params.permit(:task)
    .permit(:title, :description, :completed, :trash, :due_date)
  end
end
