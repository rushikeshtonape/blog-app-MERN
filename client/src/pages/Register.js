import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Box,Typography,TextField,Button} from "@mui/material";
import axios from "axios"
const Register = () => {
  const navigate = useNavigate();


  const [inputs , setInputs] = useState({
    name:'',
    email:'',
    password:''
  })


  const handleChange =(e)=>{
    setInputs((prevState)=>({
    ...prevState,
    [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
   try{
   const {data} = await axios.post('/api/v1/user/register', {username:inputs.name,email:inputs.email,password:inputs.password})
   if(data.success){
    alert("user registration successfully");
    navigate('/login');
   } 
  }catch(error){
    console.log(error);
   }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <Box maxWidth={450}
    display="flex"
    flexDirection={"column"}
    alignItems="center"
    justifyContent={"center"}
    margin="auto"
    marginTop={5}
    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
    padding={3}
    borderRadius={2}>
      <Typography variant='h4' sx={{textTransform: "uppercase"}} padding={3} textAlign="center">Register</Typography>
        
        <TextField placeholder='name' onChange={handleChange} value={inputs.name} name='name' margin='normal' type='text' required/>
        <TextField placeholder='email' onChange={handleChange} value={inputs.email} name='email' margin='normal' type='email' required/>
        <TextField placeholder='password' onChange={handleChange} value={inputs.password} name='password' margin='normal' type='password' required/>
        <Button type='submit' sx={{borderRadius : 1, marginTop:3}} variant='contained' >Submit</Button>
        <Button onClick={()=> {navigate("/login")}} type='button' sx={{marginTop:3}}>Already Register? Please Login</Button>
        
    </Box>
    </form>
    </>
  )
}

export default Register;