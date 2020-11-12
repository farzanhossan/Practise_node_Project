import app from './app';
import { TimeSchedule } from './helper/scheduler';
const port: any = process.env.PORT || 3001;

new app().start(port)
  .then((port) => {
    // TimeSchedule();
    console.log(`Server running on port ${port}`)
    console.log(`Api Endpoint- localhost:${port}/api/v1/users`);
    console.time('Database Connection Time');
  })
  .catch(error => {
    console.log(error)
    process.exit(1);
  });