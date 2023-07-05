import React, { useState } from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';




const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required')
        .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
        .min(6, 'Username must be at least 6 characters long')
        .max(20, 'Username must not exceed 20 characters')
    ,
    email: Yup.string().email('Invalid email address').required('Email is required'),

    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            'Password must contain at least 8 characters, including one letter and one number')



})



const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),

    },
}));


function Register() {


    const classes = useStyles();


    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);


    const formik = useFormik({

        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newData = JSON.parse(localStorage.getItem('register')) || [];
            const data = {
                username: values.username,
                email: values.email,
                password: values.password
            };

            const usercheck = newData.find((elm) => elm.email === data.email)

            console.log(usercheck)

            if (usercheck) {
                alert("User already exists with this Email Id");
            } else {
                newData.push(data);
                localStorage.setItem('register', JSON.stringify(newData));
                alert("done")
                navigate('/login')

            }
        }
    });


    return (


        <div className='main' >

            <div className="sub1">

                <img className='logo1' src='./front.png' alt='img' />

            </div>





            <div className="sub2">

                <img className='logo2' src="./logo.jpg" alt='logo' />

                <h1 className='title'>Welcome</h1>

                <p className='p'>Login to Labs Monitoring System</p>


                <form className='myform' onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="username"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />

                    {formik.touched.username && formik.errors.username ? (
                        <div style={{ fontSize: "28px", color: "red" }}>{formik.errors.username}</div>
                    ) : null}



                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    {formik.touched.email && formik.errors.email ? (
                        <div style={{ fontSize: "12px", color: "red" }}>{formik.errors.email}</div>
                    ) : null}


<TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className='input' name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}


                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">

                                       <div onClick={()=>setShowPassword(!showPassword)}>
                                       {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                   
                                       </div>
                                  
                                  </InputAdornment>
                                ),
                              }}
                        />


                    {formik.touched.password && formik.errors.password ? (
                        <div style={{ fontSize: "12px", color: "red" }}>{formik.errors.password}</div>
                    ) : null}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                         className='btn' 
                    >
                        Register
                    </Button>
                    </form>
            </div>

        </div>


    )
}

export default Register



