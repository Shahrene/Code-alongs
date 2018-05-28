# good code = input - process - output

# brevity does not always equal clarity

#appropriate naming - tell the story

#low coupling - high cohesion

#procedural
#imperative
#functional
#OOP

# example_input = 'YOYO' #input = gets.chomp
#
# def dan(input)
#
#   if input.end_with?('?') #using inbuilt methods
#     return 'sure' #as opposed to 'puts'
#
#   elsif input.upcase == input
#     return 'woah chill out'
#
#   elsif input.empty
#     return 'fine be that way'
#   end
# end
#
# dan(example_input)

m1 = Message.new('hello')



class Message #single responsibility

  def initialize

  end

  def question?
    self.end_with?('?')
  end
end

class DanBot #single responsibility

  def chat(input)

    if input.end_with?('?')
      return 'sure'
    elsif shouting?
      return 'woah chill out'
    elsif silence?
      return 'fine be that way'
    end
  end

  def shouting?(input)
    input.upcase == input
  end

  def silence?(input)
    input.strip == ''
  end

end
