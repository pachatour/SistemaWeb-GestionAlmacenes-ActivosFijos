import { Divider, Paper, styled, TextField, Typography,Button, Box } from '@mui/material'
import React, { useState } from 'react'

const Background = styled('div')({
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:'100vh',
    backgroundImage:"url('assets/img/banerColegio.jpg')",
    backgroundSize:'cover',
    backgroundBlendMode:'darken',
    backgroundColor:'rgba(0,0,0,0.5)'
})

const Container = styled('div')({
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
})

const LoginPaper = styled(Paper)({
    width:'100%',
    maxWidth:'400px',
    padding:'40px',
    textAlign:'center',
    borderRadius:'10px',
    boxShadow:'0px 4px 8px rgba(0,0,0,0.8)'
})

const InputBox = styled(Box)({
    marginBottom:'25px'
})

export const Login = () => {
    const [email,setEmail] = useState('');
    const [constrasena,setContrasena] = useState('');

    const handleLogar = () =>{
        alert(email+' + '+constrasena)
    }

  return (
    <Background>
        <Container>
        <Typography variant="h4" component="h1" color='textSecondary'>
                    LOGO
        </Typography>    
            <LoginPaper>
                <Typography variant="h5" component="h1" color='textSecondary'>
                    ACCESO
                </Typography>
                <Divider style={{
                    margin:'20px 0px',
                }}/>
                <form onSubmit={handleLogar}>
                    <InputBox>
                        <TextField label="Email" variant="outlined" 
                        type='email' fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </InputBox>
                    <InputBox>
                        <TextField label="Contrasena" variant="outlined" fullWidth
                        type='password' value={constrasena} onChange={(e)=>{setContrasena(e.target.value)}}/>
                    </InputBox>
                    <InputBox>
                        <Button variant="contained" fullWidth type='submit'>Ingresar</Button>
                    </InputBox>
                </form>
                <Typography variant="body1" color='textSecondary'>
                    Si no estas registrado habla con el administrador del sistema
                </Typography>
            </LoginPaper>
        </Container>
    </Background>
  )
}

 
