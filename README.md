# BrewComp

A modern way to manage home brew clubs and competitions.
## Development

There is a bash script called `run_local` which is used to spin up and down the local dev environment. It's usage is shown below:

```bash
# spin up the dev environment
./run_local dev
# ctrl+c to stop

# stop the dev environment from another shell
./run_local stop

# start the static compiled version (non-dev)
./run_local start

# destroy all containers
./run_local destroy

```

I use yarn for package management. Since svelte is a compiler, dont install any new libraries as dependencies, instead, install them all as dev deps. eg. `yarn add --dev <some library>`. When you install a new library you will need to stop your local dev environment, destroy the containers, and the restart the dev environment so it builds new containers with the appropriate deps installed.

```bash

# run the following after a new package is added
./run_local stop     # or ctrl-c if you have access to that session
./run_local destroy
./run_local dev
```

### Local dev environment containers

#### [Frontend](http://localhost:8180/)

This is the front end of the app. Its exposed at [http://localhost:8180/](http://localhost:8180/) and is where you should go when viewing/debugging/interacting with the front end.

#### [Supabase Studio](http://localhost:3000/)

This is where you set up new tables and manage supabase. Supabase is a opensource version of firebase. It handles authentication, authorization and acts as a REST api backend enabling us to easily create tables as we need without needing to maintain our own backend.

#### [Postgres](http://localhost:5432/)


This is the database used by supabase, you don't need to interact with this directly. Instead use the supbase studio to set up new tables and they are automatically exposed via API endpoints (how nice is that!).

#### [InBucket Mail](http://localhost:9000/)

A mail server that captures all emails sent by supabase so we can grab things like magic links etc for developing. This is cool because it saves us having to set up and entire SMTP/POP3 server and all the crap that comes with it. Go to the [InBucket Mail](http://localhost:9000/) user interface and you can see all the mail supabase has sent.

## Authors

 - PattyC
