
class Factory

  def initialize
    @cars = []
  end

  def build_car
    @cars.push(Car.new)
  end
end

class Robot

  #class variable
  @@robot_count = 0;

  #method that uses the class variable
  def initialize
    @@robot_count +=1
    @name = "#{prefix}#{suffix}"
  end

  #instance method - common to the class it resides in
  def name
    @name
  end

  def prefix
    ('AA'..'ZZ').to_a.sample #generate random two letters
  end

  def suffix
    ('000'..'999').to_a.sample
  end

  #instance method
  def reset

  end

  #class method - method for the class itself (use the .self). dont have to create a new object to use it
  def self.info
    "I am robot GOD"
  end
end
