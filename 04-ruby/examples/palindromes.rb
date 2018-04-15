#examples: racecar

#define method - ? means method should return boolean.


def palindrome?(str)

  return str == str.reverse

end

puts palindrome? 'racecar'
puts palindrome? 'apple'
