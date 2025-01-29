import { Hono } from 'hono'

const app = new Hono()



app.get('/signin', async (c) => {
  const body = await c.req.json();
  console.log(body);

  console.log(c.req.header('Authorization'));
  console.log(c.req.query("param"))
  return c.text("you are sign in ")
});

export default app
