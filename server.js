const mongoose = import("mongoose");
const next = import("next");
const dotenv = import("dotenv");

const dev = process.env.NODE_ENV  != "production";
const nextServer = next({ dev });
const handle = nextServer.getRequestHandler();

dotenv.config({ path: "./config.env" });
const app = require("./pages/_app");

const DB = process.env.DATABASE.replace(
    "Ferrari85",
    process.env.DATABASE_PASSWORD
    );

mongoose
   .connect(DB, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindandModify:false,
   })
    .then(()=> console.log("DB connection successfull"));
    
    const port = 3000;


let server;
nextServer.prepare().then(() => {
    app.get("*", (req,res) => {
        return handle(req,res);
    });
     
    app.listen(port, () => {
        console.log('App running on port ${port}......');
    });

});