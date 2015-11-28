database:

# Create the Postgres user
createuser wink-user
# Create the databases
createdb -Owink-user -Eutf8 wink-development
createdb -Owink-user -Eutf8 wink-test
createdb -Owink-user -Eutf8 wink-prod
# start database wink-dev with user wink-user on port 5432
psql wink-dev -U wink-user -p 5432
# TODO: Run migrations
# Start the server
