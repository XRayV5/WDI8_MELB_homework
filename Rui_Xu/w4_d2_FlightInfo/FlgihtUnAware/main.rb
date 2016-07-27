require 'pry'
require 'pg'
require 'sinatra'
require 'sinatra/reloader'
#FlightXML API
require_relative 'FlightXML2RESTDriver.rb'
require_relative 'FlightXML2REST.rb'
#Flight Aware api key
username = 'ruixu0530'
apiKey = 'ace744cee1f5f33d07f18240d742653c0f670747'

#FlightXML instance
flight_aware = FlightXML2REST.new(username, apiKey)


def run_sql q_str
  db = PG.connect(dbname:'civilaviation')
  db_pool = db.exec(q_str)
  db.close
  db_pool
end


get '/' do
  sql = "select * from airports where country = 'Australia';"
  @airports = run_sql sql
  erb :index
end

def getAirportInfo()

end
