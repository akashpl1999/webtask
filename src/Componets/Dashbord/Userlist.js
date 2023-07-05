import React, { useEffect, useState } from 'react'
import './List.css'
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { useParams } from 'react-router-dom';
import axios, { all } from 'axios'



function Userlist() {


    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const [data, setdata] = useState([])

     const [details, setDetails]= useState(null);

     const handleDetails = (data) => {

        setShowOffcanvas(canvas=>!canvas);

        setDetails(data);
     }


       const alluser =JSON.parse(localStorage.getItem('register')) 

       const islogin = JSON.parse(localStorage.getItem('userlogined'))

       
       

        const handlelogout=()=>{

             const check=alluser.filter((dt)=>dt.email !==islogin.email)

              localStorage.setItem('register', JSON.stringify(check))

              localStorage.removeItem("userlogined")

        }


    const offcanvasContent = (

        <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement='end'>

            <div className='info'>
                <div className="sidebar">
                    <div className="heading">
                        User Detelies
                    </div>

                    <MoreVertIcon className='icon' style={{ fontSize: '25px' }} />
                </div>

                <div className="usercard">

                    <img className='logo' src={details?.image} alt="test" />

                    <div className="cardinfo">
                        <div className='cardtitle'>{details?.firstName} {details?.lastName}</div>
                        <div className='cardid'>Userid : {details?.id}</div>
                        <div className='action'>Active</div>
                    </div>

                </div>


                <div className="account">
                    <div className="accounthead">
                        <div className='cover'>
                            <AccountCircleIcon style={{ fontSize: "30px" }} />
                        </div>
                        <div> <p className='head'>Basic & Account Details</p>
                        </div>
                    </div>
                    <div className="accountinfo">
                        <div className="name">
                            <div className='cardtitle'>{details?.username}</div>
                            <div className='cardtitle2'>Fullname</div>
                        </div>

                        <div className="role">

                            <div className='cardtitle'>{details?.gender}</div>
                            <div className='cardtitle2'>gender</div>

                        </div>

                    </div>


                </div>



                <div className="account">
                    <div className="accounthead">
                        <div className='cover'><EqualizerIcon style={{ fontSize: "30px", marginRight: "4px" }} /></div>
                        <p className='head'>User info</p>
                    </div>
                    <div className="accountinfo">
                        <div className="name">
                            <div className='cardtitle'>{details?.phone}</div>
                            <div className='cardtitle2'>phone</div>
                        </div>
                        <div className="role">
                            <div className='cardtitle'>{details?.address?.address} {details?.address?.city}</div>
                            <div className='cardtitle2'>address</div>
                        </div>
                    </div>
                </div>
            </div>
        </Offcanvas>
    );




    async function fetchData() {

        try {
            const response = await axios.get('https://dummyjson.com/users');
            console.log(response.data.users);
            setdata(response.data.users);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchData()
    }, [])



    return (
        <>
            {offcanvasContent}

            <div className='first'>
                <div className="header">
                    <div className="headname">

                        <h4>User</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, </p>

                    </div>

                    <button onClick={handlelogout} className='userbtn'> + Add User</button>

                </div>




                <div className="searchbar">

                    <div className="inputsearch">
                        <SearchIcon className='icon' />
                        <input className='search' type='text' />
                    </div>

                    <div className="filtercomp">

                        <FilterListIcon className='icon' />
                        <label className='label'>Filter</label>

                    </div>
                </div>



                <div className="maincontainer">



                    <div className="container">

                        <div className="item">
                            <p>NAME</p>
                            <ImportExportIcon />

                        </div>

                        <div className="item">
                            <p>USER ID</p>
                            <ImportExportIcon />

                        </div>
                        <div className="item">

                            <p>ROLE</p>
                            <ImportExportIcon />
                        </div>

                        <div className="item">
                            <p>birthDate</p>
                            <ImportExportIcon />
                         
                        </div>


                    </div>


                    <div className="users">

                        {
                            data?.slice(0, 6).map((dt, i) => {

                              
                                return (
                                    <div className="box" key={i}  style={ i%2==0 ? { borderLeft: "4px solid red"} :{borderLeft:'4px solid orange'}}>

                                        <button  onClick={()=>handleDetails(dt)} style={{ border: "none", color: "inherit" }}>

                                            <div className="one">

                                                <img className='userlogo' src={dt.image} alt="text" />
                                                <p>{dt.username}</p>
                                            </div>

                                        </button>

                                        <div className="two">
                                            <p>{dt.id}</p>
                                        </div>
                                        <div className="three">
                                            <p>{dt.email}</p>
                                        </div>
                                        <div className="four">
                                            <p>{dt.birthDate}</p>
                                            <MoreVertIcon />
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>



                    <div className='count'>

                        <p>Showing 1-5 of 5</p>

                    </div>
                </div>
            </div >

        </>

    )
}

export default Userlist