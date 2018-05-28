# racecar

if 'racecar' == 'racecar'.reverse
  puts 'its a palindrome'
end

# is hardcoded and can not be tested using another example

def palindrome(str)
  str == str.reverse
end

if palindrome('racecar') == true
  puts 'yes'
else
  puts 'no'


# code is easy to test with different examples



#testing framework example (simple one)
def test(expected, actual)
  if expected == actual
    puts 'yay'
  else
    puts 'nay'
  end
end

test(true, palindrome('racecar'))
test(false, palindrome('goats'))
test(true, palindrome('atoyota'))


#sinatra app

@languages = ['ruby', 'js', 'css']

#views - show.erb

<%= @languages %>
ruby, js and css 
