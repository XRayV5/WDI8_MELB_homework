
class Client
  attr_accessor :children, :pets, :age
  attr_reader :name

  def initialize(name, age, children)
    @name = name
    @age = age
    @children = children
    @pets = []
  end

  def to_s
    "#{@name}, #{@age}, #{@children}, #{@pets.join('|')}"
  end

end
