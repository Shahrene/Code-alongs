#require 'pry'

# loops - while loops
# while some_condition
# how to get input from user



secret = 13

puts('Welcome to the guessing game')
puts('Guess a number between 1 and 20: ')

guess = gets.chomp.to_i
#loop do <- alternate to while loop
while guess != secret
  print 'Wrong, try again: '
  guess = gets.chomp.to_i
  guess == secret
  break
end

puts 'you win'
#binding.pry debugger
