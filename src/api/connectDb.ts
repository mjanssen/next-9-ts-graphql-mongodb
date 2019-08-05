import mongoose from 'mongoose';

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    // Using new database connection
    await mongoose.connect('mongodb://localhost:27017/graphql', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }
  return handler(req, res);
};
export default connectDb;
