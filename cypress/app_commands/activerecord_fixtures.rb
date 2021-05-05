# you can delete this file if you don't use Rails Test Fixtures

fixtures_dir = command_options.try(:[], 'fixtures_dir')
fixture_files = command_options.try(:[], 'fixtures')

if defined?(ActiveRecord)
  require 'active_record/fixtures'

  fixtures_dir ||= "#{::Rails.root}/spec/fixtures"
  fixture_files ||= Dir["#{fixtures_dir}/**/*.yml"].map { |f| f[(fixtures_dir.size + 1)..-5] }

  logger.debug "loading fixtures: { dir: #{fixtures_dir}, files: #{fixture_files} }"
  ActiveRecord::FixtureSet.reset_cache
  ActiveRecord::FixtureSet.create_fixtures(fixtures_dir, fixture_files)
  'Fixtures Done' # this gets returned
else # this else part can be removed
  logger.error 'Looks like activerecord_fixtures has to be modified to suite your need'
  Boat.create name: 'Test Boat', color: 'yellow and black', length: 25
end