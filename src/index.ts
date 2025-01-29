import { Hono } from 'hono'

const app = new Hono()
//creating middleware
app.get('/', async (c: any) => {
  const html: any = `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        color: green;
        font-size: 14vh;
        text-shadow: 1px 1px 10px rgb(112, 162, 156);
    }
</style>

<body>
    <h1>Running...</h1>
</body>

</html>`
  return c.html(html);
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
