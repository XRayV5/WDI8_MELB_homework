#require './app.rb'
require 'digest'

class Movie
  attr_accessor :title, :year, :rated, :released, :runtime, :genre, :director, :actors

  def initialize(film)
    @serial = Digest::MD5.new
    @title = film['Title']
    @rated = film['Rated']
    @released = film['Released']
    @runtime = film['Runtime']
    @genre = film['Genre']
    @director = film['Director']
    @actors = film['Actors']
  end

  def to_s
    "#{@title},#{@rated},#{@released},
    #{@runtime},#{@genre.to_a.join('|')},#{@director},
    #{@actors.to_a.join('|')}"
  end

  def insert(collection)
    #@genre = @genre.split(',').join('|')
    File.open(collection, 'a+') do |file|
      file.puts     "#{@title},#{@rated},#{@released},
          #{@runtime},#{@genre},#{@director},
          #{@actors}"
    end
  end
end
