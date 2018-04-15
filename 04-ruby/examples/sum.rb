#$ ruby sum.rb 2 3
# 5

#ARGV = ['2', '3']

puts ARGV[0].to_i + ARGV[1].to_i

# 1 while loop

total = 0
index = 0

while index < ARGV.length
    puts ARGV[index]
    total += ARGV[index].to_i
    index += 1
  end

# [].each

total = 0

ARGV.each do |elem| # elem turns the given data into a variable
  total = total + elem.to_i
end

puts total
