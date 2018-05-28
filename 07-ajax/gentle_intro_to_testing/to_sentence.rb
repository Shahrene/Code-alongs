

def to_sentence(list)

# if list.length == 1
# return list.first
# elsif list.length == 2
#   return list.join(' and ')
# else
#   return list[0..-2].join(', ') + ' and ' + list.last
# end
#
# end


case list.length
when 1
  list.first
when 2
  list.join(' and ')
else
  "#{list[0..-2].join(', ')} and #{list.last}"

end
