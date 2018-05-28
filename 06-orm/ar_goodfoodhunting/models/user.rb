class User <
  ActiveRecord::Base
  has_secure_password
  #gives u 2 methods
  #1 u1.password
  #2 authenticate
  has_many :likes
end
