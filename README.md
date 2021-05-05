# Marina Management

## Running the app

1. Clone the repo: `git clone git@github.com:derekhouck/marina-management.git`
1. Go to the app: `cd marina-management`
1. Install the dependencies: `bundle install`
1. Create the databases: `rake db:create`
1. Seed the database: `rake db:seed`
1. Start Rails server: `rails s -p 3001`
1. Start React app:
   - `cd client`
   - `yarn install`
   - `yarn start`
1. If the app doesn't open automatically, go to http://localhost:3000/

## Running Cypress

1. Start Rails server: `CYPRESS=1 bin/rails server -p 3001`
2. Start React app: `cd client && yarn start`
3. Start Cypress: `yarn cypress open`

## What I'd implement if I had more time

- Loading states
- Better error handling
- Add Foreman to simplify app startup
- Better styling, of course
- Responsiveness
- Scopes for undocked boats and unused docks
- Make including the boats in the docks get optional
- Conditional boat styling based on boat color
- Front end tests
- Dock reassignment without undocking
- Batch boat creation/scuttling
- Live marina updates 
- User accounts/permissions