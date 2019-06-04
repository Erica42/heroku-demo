require 'rubygems'
require 'bundler/setup'
require 'sinatra'

# Comment this use block out with # on each line
# if you don't want basic HTTP authentication
# use Rack::Auth::Basic, "Restricted Area" do |username, password|
#   [username, password] == ['heroku', 'rocks']
# end

get '/' do
  redirect "/index.html"
end