class ReportWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perfrom(username)
    puts "SIDEKIQ WORKER generating report for #{username}"
  end

end
