const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const port=3001;
const app=express();

app.use(cors());
app.use(bodyParser.json());

// mongodb connection

mongoose.connect('mongodb://127.0.0.1:27017/AMS').then(()=>{
    console.log('database is connection successfully');
    app.listen(port,()=>{
        console.log(`server is running on PORT ${port}`);
    })
})
.catch((err)=>{
    console.err('connnection feild!',err);
});

app.use(bodyParser.json());

//model of registration
const faculty=mongoose.model('faculty',{
    name:String,
    email:String,
    qulification:String,
    dob:String,
    contact:String,
    password:String
});

//model of students

const student=mongoose.model('student',{
    name:String,
    rollno:String,
    course:String,
    semester:String,
    branch:String
});

//User post data API

app.post('/faculty',async(req,res)=>{
    const {name,email,qulification,dob,contact,password}=req.body;
    try{
       const Faculty=new faculty({name,email,qulification,dob,contact,password});
       await Faculty.save();
       res.json({message:'added success'});
    }
    catch(error){
        console.error('error during save data');
        res.status(500).json('unspected error');
    }
});

// Login API 


app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const Faculty=await faculty.findOne({email});
        if(!Faculty || Faculty.password!==password){
            return res.status(404).json({message:'invailid creditional'});
        }
            res.json({message:'login successfully'});
            
    }
    catch(error){
        console.error(error);
        res.status(404).json({message:'unspected error'});
    }
});

//Student post data API

app.post('/student',async(req,res)=>{
    const {name,rollno,course,semester,branch}=req.body;
    try{
        const students=new student({name,rollno,course,semester,branch});
        await students.save();
        res.status(200).json({message:'data sent suceessfully!'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'unsepcted error'});
    }
});

//Student get database

app.get('/student/data',async(req,res)=>{
  try{
    const Student= await student.find();
    res.json({Student})
  }
  catch(error){
    console.error(error);
    res.status(404).json({message:'unsepcted error'});
  }
})

//Faculty get database

app.get('/faculty/data',async(req,res)=>{
    try{
        const Faculty= await faculty.find();
        res.json({Faculty});
    }
    catch(error){
        console.error(error);
        res.status(404).json({message:'unspected error'});
    }
})