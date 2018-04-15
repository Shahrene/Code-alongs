=begin

hackers
|
|-- Mary
    |--README.md
|-- Jo
     |--README.md
|-- Lisa
    |--README.md

=end

require 'fileutils'

hackers = ['Mary', 'Jo', 'Lisa']

hackers.each do |hacker|
    FileUtils.mkdir(hacker.downcase)
    FileUtils.cd(hacker) do # do will loop in and out
      FileUtils.touch('README.md') # ("#{hacker}/README.md") use relative path to make it unneccesary to cd in and out
    #FileUtils.cd('../')  to cd in an out mannually (more steps)

end
