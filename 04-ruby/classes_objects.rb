# hashes - data structure, table, no custom methods, methods are already built in.

# objects - in ruby, everything is an object - string, hash, arrays, classes, variable etc.

# classes - allow us to protect and regurgetate data. used to organise & structure the program.
# the subject is a classification, it is the template from which new objects can be made,
# can be custom made, with custom methods,
# when you make a new object of a class it is called an instance.
# a variable is an instance that lives within an instance
# defining methods within the class is for the new instance only
# the instances with @ in front of variables mean that each instance will have their own variable data 'instance variables'




class Fish

  #class variable
  @@fish_count

  #class method is calling self and then method, can not be called by the instances
  def self.say_hi
    puts 'hi'
  end

  def initialize # when new instance, run this first ie f1 = Fish.new
    @@fish_count =+ 1
  end

  #instance method
  def walk #for future instances
    @age = 10 #age will only be assigned when the method is called ie. f1.walk
  end

  def talk

  end

end
