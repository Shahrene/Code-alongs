class Zombie

  attr_reader :name, :brains_eaten

  def initialize(name="Fred", brains_eaten=0, hungry=true)
    @name = name
    @brains_eaten = brains_eaten
    @hungry = hungry
  end

  def hungry?
    @hungry
  end

  def eat
    @brains_eaten += 1
  end



end
