import { Elysia } from "elysia";

const app = new Elysia()
  .get('/', () => 'Hello')
  .post('/hi', () => 'Hi')
  .route('SEARCH', '/search', () => 'Search')
  .onError(({ code }) => {
    if (code === '400')
      return 'Route not found :('
  })
  .listen(3000);




console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

app.handle(new Request('http://localhost:3000/')).then(console.log)