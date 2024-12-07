import mongoose from 'mongoose';
import app from './apps';
import config from './config';

const server = async () => {
  try {
    await mongoose.connect(config.Database_URI as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
