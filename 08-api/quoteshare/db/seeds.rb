# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stuff = %w|cake pudding muffin tart|
things = %w|great giant lovely hell|

Quote.destroy_all

10.times do
Quote.create body: "#{stuff.sample} #{things.sample}", author: 'Voltaire'
end
