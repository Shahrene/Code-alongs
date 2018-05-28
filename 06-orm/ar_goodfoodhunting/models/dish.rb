class Dish < ActiveRecord:: Base

  validates :name, length: { in: 6..20 } #ensures users enter a name for dish
  validates :img_url, presence: true

  has_many :comments
  has_many :likes
end
