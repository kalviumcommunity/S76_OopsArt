const express =require('express');
const app = express();
const {error} = {console};

const PORT =3000;

app.use(express.json())

app.get('/',(req,res)=>{
    return res.send({message:"Server is running Fine!"})
})

app.post('/signup',(req,res)=>{
    const {Email,Password}=req.body;

    if(!Email){
        res.json({message:"Email cannot be empty"})
    }
    if(Password.length() < 8 || Password.length() > 16 ){
        res.json({message:"Password length should be greater than 8 or less than or equal to 16"})
    }

    else{
        res.status(200).json({message:"User Signup is Successful!"})
    }
})

app.listen(PORT,
    console.log(`Server is running on http://localhost:${PORT}`)
)