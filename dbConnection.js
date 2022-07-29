const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://admin:admin123456@cluster0.19wu0.mongodb.net/PetRecord?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
    }
  );
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });