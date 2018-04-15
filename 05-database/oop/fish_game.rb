require 'pry'

class Fish  #starts with caps and CamelCase

  #metaprogramming - a program that writes a program

  attr_accessor :name
  #the below will read & write the two methods 'name' (getter and setter)
  attr_reader :health
  #will read/get the method 'health' only
  attr_writer :speed
  #will writer/set the method 'speed' only

  def initialize (name) #when a fish is created in CL ie. f1 = Fish.new('nemo'), this method will autorun, and you have to give it a name
    puts 'new fish is born'
    # health = 10 # local
    @health = 10 # increases to an instance variable
    @speed = 5
    @name = name
    stomach = [ ]

  end

  #getter
  def name #abilities
    return @name
  end

  #setter
  def name=(new_name)
    @name = new_name
  end

  def sleep
    @health = @health + 10
  end

end

class Plant

  def initialize
    @health = 5
  end

binding.pry

puts 'welcome to my underwater world'
