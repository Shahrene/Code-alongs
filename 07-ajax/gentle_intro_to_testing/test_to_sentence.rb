#test cases

#test(expected, actual)

require 'minitest/autorun'

require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'to_sentence'

class ToSentenceTest < Minitest::Test

def test_more_than_2
  #expected,                              actual test
  assert_equal 'ruby, js and css',     to_sentence(['ruby', 'js', 'css'])

end

def test_2
assert_equal 'ruby and js' ,   to_sentence(['ruby', 'js'])

end

def test_1
  assert_equal 'ruby' , to_sentence(['ruby'])
end

end
