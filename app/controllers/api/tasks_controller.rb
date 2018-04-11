class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def index
    trash = params[:isTrashed]
    all_tasks = current_user.tasks
    if trash == "false"
      @tasks = all_tasks.where("trash = 'false'")
    else
      @tasks = all_tasks.where("trash = 'true'")
    end
    render :index
  end

  def show
    @task = current_user.tasks.find(params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)
    @task.completed = false
    @task.trash = false

    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = current_user.tasks.find(params[:id])

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])

    if @task.destroy
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completed,
                                :trash, :due_date, :list_id, :user_id)
  end
end
