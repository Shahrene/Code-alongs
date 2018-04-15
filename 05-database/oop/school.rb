
require 'pry'

class School

  def initialize(school)
    @db = {}
  end

  def db
    @db
  end

  def add(name, grade)
    #db[grade] || = [] - common way to set something if nothing in array
    #db[grade] << name

    if @db[grade]
      @db[grade] << name
    else
    @db[grade] = [name]
  end

  def grade(grade)
    @db[grade]
  end

end
binding.pry
#
# school = School.new("Haleakala Hippy School")
#
# school.db
#
# school.add("James", 2)
#
# school.add("Phil", 2)
#
# school.add("Jennifer", 3)
#
# school.add("Little Billy", 1)
#
# school.db
#
# school.grade(2)
