require 'pry'

class Apartment
  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths, :renters

  def initialize(price, is_occupied, sqft, num_beds, num_baths, renter)
    @price = price
    @is_occupied = is_occupied
    @sqft = num_beds
    @num_baths = num_baths
    @num_beds = num_beds
    @renters = renters
  end

  def to_s
    if @is_occupied == true
      occu = 'occupied'
    else
      occu = 'available'
    end
    str = "#{@price}, #{occu}, #{@sqft}, #{@num_bed}, #{@num_baths},#{@renters.join('|')}"
  end

  def addPerson(per)
    if per.class == Person
      @renters << per
    else
      puts "invalid object type"
    end
  end
end
