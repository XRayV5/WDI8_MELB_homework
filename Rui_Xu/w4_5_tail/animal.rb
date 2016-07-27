require 'pry'

class Animal
  attr_accessor :name, :toys
  attr_reader :age, :gender, :species

  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def to_s
    "#{@name}, #{@age}, #{@gender}, #{@species}, #{@toys.join('|')}"
  end

end
