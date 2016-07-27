require 'pry'
# class User
#   include Attrio
#
#   define_attributes do
#     attr :name, String
#     attr :age, Integer
#     attr :birthday, DateTime
#     attr :active, Boolean
#   end
# end

class Building
  attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors, :apartments

  def initialize (address, style, has_doorman, is_walkup, num_floors, apartments)
    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors
    @apartments = apartments
  end

  def to_s()

    if @has_doorman == true
      doorman = "has door man"
    else
      doorman = "no doorman"
    end
    if @is_walkup == true
      walkup = "stair case"
    else
      walkup = "lifts available"
    end

    apartments=""
    @apartments.each do |apt|
      apartments +="#{apt}"
    end

    str = "#{@address}, #{@style}, #{doorman}, #{walkup}, #{@num_floors},#{apartments}"
  end

  def addApartment(aptmt)
    if aptmt.class == Apartment
      @apartments << aptmt
    else
      puts "Invalid object type"
    end
  end

end
