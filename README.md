# Motorized Cookie

Motorized-cookie is a project created the 20 nov 2023 to train on Angular with the aim to be ready for a job
interview
with [midas.fr](http://www.midas.fr). The goal was also to show some technical expertise.

In the beginning, the purpose was to recreate the website, but because of missing time and data, I focus on making a
simple
e-commerce website with product, category and auth

## How to launch

The project uses docker with a docker compose file to launch all the services. You need to go to the docker
directory and use the command :

```
docker compose up -d 
```

The frontend and backend service use bind mount so that every change made on the code appears instantly

## Tech stack

The chosen tech stack is the following is :

- frontend: [Angular 17](https://angular.dev/) + [tailwindcss](https://tailwindcss.com/)
- backend : [nestjs](https://docs.nestjs.com/)
- orm : [drizzle-orm](https://orm.drizzle.team/docs/overview) (first time use)
- database : postgresql
- other: docker

For the frontend I choose Angular and Tailwind because, like said, the purpose of this project was to quickly learn
angular to be operational directly. Tailwindcss was chosen for personal reason, and because why inspecting the midas
website I detect tailwind class

For the backend I use nestjs for multiple reasons :

- It uses the same DI system as angular
- It standardizes filename, directory, architecture making it easy to read the project and integrate new people
- It has a lot of plugins to make development easy like the openapi/swagger plugin
- It implements by default some great features like the exceptions handler to catcher everything even async ones (
  specially useful when working with express)
- Allow switching between express and fastify to get more performance that become beneficial when dealing with a lot of
  requests or to limit time to response when working in a cloud environment

For database, I use postgresql because it's the most common database and everyone understands sql. Finally, to interact
with database I use drizzle-orm which is an orm that uses a syntax close to sql, has great performance, full TS support
and work natively in cloud environment like google cloud function or AWS lambda contrary to prisma.

## Project architecture

The project is divided in 3 directories

- frontend: everything related to the frontend is here
- backend: Everything related to the backend is here
- docker: Contains compose file(s)

In the backend/frontend every directory corresponds to a feature/module

## How to improve / What missing from this project

In this section, I will enumerate everything that the project missed feature etc... (because of time), how I would
implement it and
what could have been better

### Database

#### Performance

To improve the database performance, I would create indexes on most required tables. From my point of view because it's
a
platform for an e-commerce website the most queried table is the `products` table. So I would create an index on it with
the category columns.
Furthermore, In the future when we can create order I would create an index on the `orders` table base on the client's
id to easily retrieve every order from the client

In the case of the website getting a lot of traffic, I would also implement a cache system with a redis database to
store
results of queries

#### Security

Because this project handles the creation on table, migrations to db,seeding the database and because of time I only
use the default database user to access it. In production, I would specially create postgres user that can only perfect
some operation. For example, I would create a user that can only perform CRUD operations but not create/truncate table
etc...

#### Integrity

To get a better data integrity, I would also add more constraints on table/columns, for example, I would create
contrainte
on email to only allow lowercase and trimmed value.

I would also create triggers to prevent some modification like an ID modification. I would also create missing fields
like `updatedAt` to know when happens the last modification

Finally, I would set up a database replica that would be streamed to update on each event if the DB is still "small" or
I
would program a replication every 2 hours, for example

### Auth

For auth, in the backend I use a Bearer token but only with a single access token. If I had more time or than I know
this project would
be used in prod I would create a pair of tokens

- An access token (that expires after 15min max)
- A refresh token (that has a longer expiration period)

I would also store token in DB so that every time the user logout or the token is expired, I could remove it from DB,
and the user could not use it anymore

If it's possible to use an Auth0 provider like Octa I would think about it because it can provide 2FA.

On the frontend I use an auth guard to restrict access to some routes. This auth guard check just if there is a token in
the local storage. The first thing I would do is to save the access token in the auth service and only store the refresh
token on the local storage.<br>
When making a request, I would use a http interceptor like the interceptor to log every request that injects the token
on every request and could ask for refresh token

### PDF

One feature I wanted to implement was the feature to generate pdf invoice for specific order. To do that, I would use
pupetteer to generate the PDF. Because puppeteer is a headless browser that means we can use all the css like a website
and very personalized de final render.

So I would create a pdf module on the backend with puppeteer that uses handlebars with its system of template and
tailwind to generate the final pdf.

If the api run on lambda function, I would use a service like BrightData to connect to an instance of chrome

Because pdf can take a lot of space to limit, we can implement 2 different strategies :

- Either we generate pdf every time the client wants, and we can program a cron job that removes every recent pdf
- We create a limit so that the client has to wait before generating a new pdf, and during that wait period we return
  the
  last generated period. When the period has expired if the client generates a new pdf, we delete the previous one

I personally would choose the second strategy because if we run in the cloud, we also had to use a service to use an
instance of chrome which increases cost.

### Mail

I create a mail module that allows us to send email. I use this module to send email on signup. One thing that it misses
is the use of template. One way that I would implement that is to create template with handlebars and tailwind css. With
that, I would read and compile the template with handlebars and pass the html to the nodemailer transporter.

### Order

One thing that our e-commerce website misses is a way to make order. In the backend, we could implement it by using SQL
transaction to verify that each product is available before making the payment by using an external platform like
stripe, or directly using PayPal, visa, mastercard API.

If we run on lambda function each time, a request is made, a new lambda function is instantiated, so it would be easy to
scale, but if we run on a server, we could implement a queue system with RabbitMQ/Kafka and subscriber to listen and
handle new payement

### Logging

Either on the backend or the frontend, we use a basic logging system that prints on the console. I would personally
implement a new one on each service.

On the backend, I would implement a logging système that uses Winston to write to the console and to write in DB to
query log by severity, time, service etc... <br>
In the frontend I would use Sentry to collect everything like browser, browser version, time etc...

### Performance

#### Backend

To get better performance on the backend, I would use Fastify instead of express. By using Fastify the servers could
handle more request en make response faster, which is important if the server runs in the cloud like AWS lambda to limit
cost

### Frontend

On the frontend I would use SSR to get better performance which Angular includes natively in Angular 17 but if we can't
use it I would try to maximize the parallelization of tasks wherever I can

### Database

I talk about database performance in the database section previously

### Better error handling

One of the big things that missed in this project is a better error handling.

#### backend

In the backend, I would create a custom exception handler for validation and database and create instance instead of
using
signleton. By using this strategy, I could custom handler to handle a specific context and I return a better response
instead of a generic one.
For example, I use zod on the backend to validate what comes from the exterior, so I could create a Zod handler to send
back the appropriate error code but also to format the error in a nice way for the consumer.<br>
I would also do that for handling DB error etc...

### frontend

In the frontend there is no validation from what comes from server, so I would also use zod to parse everything.
Furthermore, I would also add catch block on the httClient

In the case of were not using nestjs, we could use tRPC to share schema between frontend and backend and ensure that
everything matches

### Testing

THe other bing thing that misses in the project is tests. Because of time, there is no test for the backend or the
frontend. Fortunately,
It would not be a big problem to implement because Angular and Nest come with everything that we need for test

For testing strategy, I personally advocate more for e2e testing because it allows us to see in real condition what we
get
or what we could get. This methode of thinking comes from the fact that if, for example, we try to unit test a
controller, and we
mock our DB because we mock the DB we will always get what our mock send us back, so what we just did was to test our
mock
not our controller.

I would only use unit test for small test that tests complexe logic, but that don't interact with other systems.

For testing purposes, I would also set up different stages for our frontend and backend image and create another
composed
file that targets those specific stages and launch all the tests

Those stages for our images would go from a builder stage to a final stage where the prod image is created and ready to
use

In the end, I would set up a CI/CD pipeline with GitHub actions; that runs our compose test file on pull request or on
new release

### CORS

If you look at the CORS on the backend you will see that we allow every origin this choice was made because it is just a
demo project and I needed to iterate fastly. To add more security in prod or on real project, I would first of all
detect
with the env variable if I run on dev or prod mode, and I would set de origin according to it.
Personally, I would use a function to load the origin either from env variable or from DB



