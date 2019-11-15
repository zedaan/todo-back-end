import mongoose from "mongoose";
import { db_host, db_port, db_name } from "./vars";

// connect to mongodb
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connection Established");
  // seeds();
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Connection Disconnected");
});

mongoose.connection.on("close", () => {
  console.log("MongoDB Connection Closed");
});

mongoose.connection.on("error", error => {
  console.log("MongoDB ERROR: " + error);
  process.exit(1);
});

export const connectMongo = async () => {
  // let connectionuri = `mongodb://localhost/test`;
  let connectionuri =
    process.env.ENVIRONMENT === "dev"
      ? `mongodb://${db_host}:${db_port}/${db_name}`
      : `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.HOST}/${process.env.DB_BAME}?retryWrites=${process.env.MONGO_DEBUG}&w=majority`;

  await mongoose.connect(connectionuri, {
    autoReconnect: true,
    reconnectTries: 1000000,
    reconnectInterval: 3000,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
};
