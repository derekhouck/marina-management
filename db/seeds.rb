# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do |i|
  name = "Dock #{i + 1}"
  Dock.create(name: name)
end

boat_names = ['Boaty McBoatface', 'Titanic', 'Shorty', 'Aquaboat', 'Carbon Dater']
colors = %w[red yellow blue black green]

5.times do |i|
  boat = Boat.create(name: boat_names[i], length: rand(5..60), color: colors[i])
  if boat.length > 30
    boat.dock_id = rand(20)
    boat.save
  end
end
