# frozen_string_literal: true

# Create 20 docks
20.times do |i|
  name = "Dock #{i + 1}"
  Dock.create(name: name)
end

boat_names = ['Boaty McBoatface', 'Titanic', 'Shorty', 'Aquaboat', 'Carbon Dater']
colors = %w[red yellow blue black green]

# Create five boats with random lengths
5.times do |i|
  boat = Boat.create(name: boat_names[i], length: rand(5..60), color: colors[i])
  # Randomly assign boats over a certain length to a dock
  # Not guaranteed that any boats will be docked by default, but it's likely and more fun than statically assigning them
  if boat.length > 30
    boat.dock_id = rand(20)
    boat.save
  end
end
