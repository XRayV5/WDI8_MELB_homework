#YahooFinance::get_quotes(YahooFinance::StandardQuote,'NTDOY')
=begin
Build a Sinatra App that will take a stock symbol and display data about the stock
The stock symbol should be inputted via the url as query string
The result should be rendered in the browswer with ERB.
Suggested Approach

Build a Sinatra application

Include:
app.rb
views/index.erb
public/styles.css
Define a method that makes a request to the YahooFinance api via the YahooFinance gem.

This method should take, as paramater, a stock ticker
This method should return data about the stock
Test this method manually in pry
Display, for example, google's stock price when there is GET request to /?stock=APPL
The file should be show.erb
Example api usage:

require 'yahoofinance'
result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
=end


require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'


get '/' do
  # stock = params[:stk]
  # @stock = stock
  # #binding pry
  # @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock)
  erb(:index)
  #{}"#{params[stk]}"
end


get '/show' do
  stock = params[:stk]
  @stock = stock
  #binding pry
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock)

  erb(:show)
end
