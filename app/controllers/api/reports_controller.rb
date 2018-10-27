class Api::ReportsController < ApplicationController
  def show
    # generate_report()
    ReportWorker.perform_async("fakeuser")
    redirect_to "/"
  end

  private
  
  def generate_report
    sleep 30
  end
end
