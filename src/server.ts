import mongoose from 'mongoose';
import app from './apps';
import config from './config';
import {Server} from 'http'

let server:Server
const main = async () => {
  try {
    await mongoose.connect(config.Database_URI as string);
   server= app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
main();

process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("uncaughtException",()=>{
  process.exit(1)
})



