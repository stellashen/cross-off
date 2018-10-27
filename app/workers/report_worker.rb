class ReportWorker
  include Sidekiq::ReportWorker
  sidekiq_options retry: false

  def perfrom(user)
    puts "SIDEKIQ WORKER generating report for #{user.username}"
  end

end
