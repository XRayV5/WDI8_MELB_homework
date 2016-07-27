require "./building"
require "pry"
# String
# Fixnum
# Integer
# Numeric
# Float
# Numeric
# NilClass
# Hash
# Symbol
# Array
# Range
def initBuilding()
  # if(address.class != String)
  #   return "invalid type for address"
  # elsif style !=
  puts 'Enter building address:'
  address = gets.chomp
  while address.class != String
    puts "invalid type for address, pls enter again"
    address = gets.chomp
  end
  puts 'Enter building style:'
  style = gets.chomp
  while style.class != String
    puts "invalid type for style, pls enter again"
    style = gets.chomp
  end
  puts 'Enter if the building has a doorman(true/false):'
  has_doorman = gets.chomp
  has_doorman = to_b(has_doorman)
  while has_doorman.class != TrueClass&&has_doorman.class != FalseClass
    puts "invalid type for has_doorman, pls enter again"
    has_doorman = gets.chomp
    has_doorman = to_b(has_doorman)
  end
  puts 'Enter if you have to walk up(true/false):'
  is_walkup = gets.chomp
  is_walkup = to_b(is_walkup)
  while is_walkup.class != TrueClass&&is_walkup.class != FalseClass
    puts "invalid type for is_walkup, pls enter again"
    is_walkup = gets.chomp
    is_walkup = to_b(is_walkup)
  end
  puts 'Enter number of floors of the building:'
  num_floors = gets.chomp
  while num_floors.to_i.class != Fixnum
    puts "invalid type for num_floors, pls enter again"
    num_floors = gets.chomp
  end
  appartments = []

  new_building = Building.new(address, style, has_doorman, is_walkup, num_floors.to_i, appartments)
  return new_building
end


def initApartment()
  puts 'Enter apartment price:'
  price = gets.chomp
  while price.to_f.to_s != price
    puts "invalid type for price, pls enter again"
    price = gets.chomp
  end
  price = price.to_f
  puts 'Enter if the apartment is occupied:'
  is_occupied = gets.chomp
  while to_b(is_occupied).class != TrueClass&&to_b(is_occupied).class != FalseClass
    puts "invalid type for is_occupied, pls enter again"
    is_occupied = gets.chomp
  end
  is_occupied = to_b(is_occupied)
  puts 'Enter the area of the apartment:'
  sqft = gets.chomp
  while sqft.to_i.to_s != sqft
    puts "invalid type for sqft, pls enter again"
    sqft = gets.chomp
  end
  sqft = sqft.to_i
  puts 'Enter number of bedrooms:'
  num_beds = gets.chomp
  num_beds = num_beds.to_i
  while num_beds.to_i.to_s != num_beds
    puts "invaid object type for num_beds, pls enter again"
    num_beds = gets.chomp
    num_beds = num_beds.to_i
  end
  puts 'Enter number of bathrooms of the building:'
  num_baths = gets.chomp
  while num_baths.to_i.to_s != num_baths
    puts "invalid type for num_baths, pls enter again"
    num_baths = gets.chomp
    num_baths = num_baths.to_i
  end
  renters = []

  new_building = Building.new(price, is_occupied, sqft, num_beds, num_baths, renters)
  return new_building

end

def to_b str
  if str == 'true'
    return true
  elsif str == 'false'
    return false
  else
    return -1
  end
end

 #new_building = initBuilding()
new_apartment = initApartment()
binding pry

#building1 =Building.new(address, style, has_doorman, is_walkup, num_floors, appartments)


# interface
#
# loop do
#   puts 'enter building address'
#   address = gets.chomp
#   building = Building.new(bulding_name, )
# end
