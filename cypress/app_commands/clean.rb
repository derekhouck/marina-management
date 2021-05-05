# frozen_string_literal: true

if defined?(DatabaseCleaner)
  # cleaning the database using database_cleaner
  DatabaseCleaner.strategy = :truncation
  DatabaseCleaner.clean
else
  Boat.delete_all if defined?(Boat)
  Dock.delete_all if defined?(Dock)
end

Rails.logger.info 'APPCLEANED' # used by log_fail.rb
