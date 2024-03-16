const mangoose = require ('mongoose');
let mongo_url ="mongodb+srv://abhinav_11:abhinavff112233@cluster0.ye0pzbs.mongodb.net/firstdb?retryWrites=true&w=majority&appName=Cluster0"
const studentModel = require('./Model/studentModel');
let compass_url ='mongodb://localhost:27017/sampledb';

mangoose.connect(mongo_url).then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})

