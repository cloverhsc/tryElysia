import { Elysia } from "elysia";

const app = new Elysia()
  .derive(({ headers }) => {
    // add auth property in the headers
    const auth = headers['auth'];
    console.log(auth)
    return {
      name: auth?.startsWith('Clover') ? auth.slice(7) : null
    }
  })
  .get('/auth', ({ name }) => name)
  .get('/', ({ set, headers }) => {
    set.headers['X-Powered-By'] = 'Clover';
    console.log(headers)
    return 'Hello'
  })
  .post('/hi', () => 'Hi')
  .get('/id/*', ({ params }) => params['*'])
  .get('/user/', ({ error }) => error(418, 'error by Clover >.<'))
  .onError(({ code }) => {
    if (code === 'NOT_FOUND')
      return 'Route not found :('
  })
  .get('/redirect', ({ redirect }) => redirect('https://google.com'))
  .listen(3000);




console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

app.handle(new Request('http://localhost:3000/')).then(console.log)