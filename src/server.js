import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection( {
  port: 8081
});

// The handler is the function which is executed when the specific path is hit
server.route( {
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply('Hello World!');
  }
});

server.start(err => {
  if (err) {
    // Fancy error handling here
    console.error('Error was handled!');
    console.error(err);
  }

  console.log(`Server started successfully at ${server.info.uri}`);
});