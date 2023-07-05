import React, { useState } from 'react'
import './User.css'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';



const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),

    },
}));




const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),

    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            'Password must contain at least 8 characters, including one letter and one number')



})




function Login() {


    const navigate = useNavigate()

    const classes = useStyles();


    const [showPassword, setShowPassword] = useState(false);


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const data = {
                email: values.email,
                password: values.password
            };

            const newData = JSON.parse(localStorage.getItem('register'));

            const check = newData.find((dt) => dt.email === data.email)
            console.log(check)

            if (check) {

                if (check.password === data.password) {

                     localStorage.setItem('userlogined', JSON.stringify(data) )
                    alert("login successfully")
                    navigate('/list')
                } else {
                    alert("invalid credentials!")
                }

            } else {

                alert('usernot found')
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

                    >
                        Login
                    </Button>


                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>

                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>

                        </Grid>
                    </Grid>
                </form>




            </div>

        </div>


    )
}

export default Login