import { Hono } from 'hono'

const app = new Hono()
//creating middleware
app.get('/', async (c: any) => {
  return c.text('Running...')
})

async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    c.text("You dont have access")
  }
}
app.get('/signin', authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);

  console.log(c.req.header('Authorization'));
  console.log(c.req.query("param"))
  return c.text("you are sign in ")
});

export default app
