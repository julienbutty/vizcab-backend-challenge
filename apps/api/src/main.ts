// entry point file
import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', (req, res) => {
  res.send('Hello World');
});

// Add port configuration
const port = process.env.PORT || 3000;

// Start the server
fastify.listen({ port: port as number }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});

