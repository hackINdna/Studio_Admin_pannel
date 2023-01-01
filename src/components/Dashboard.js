import React, { useState } from 'react';
import f from './images/f.png';
import graph from './images/graph2.svg';
import notification from './images/icons/notification.svg';
import setting from './images/icons/setting-icon.svg';
import studioImage from './images/f.png';
import './css/dashboard.css';
import './css/dashboard-resp.css';

import { Link } from "react-router-dom";




function Dashboard() {

    const [submenu1, setSubmenu1] = useState(false);
    const [submenu2, setSubmenu2] = useState(false);


    const dis1 = {
        display: "block"
    }
    const notDis1 = {
        display: "none"
    }
    const dis2 = {
        display: "block"
    }
    const notDis2 = {
        display: "none"
    }


    const hoverFunction1 = () => {
        if (submenu1 === true) {
            setSubmenu1(false);
        }
        else {
            setSubmenu1(true);
        }
    };
    const hoverFunction2 = () => {
        if (submenu2 === true) {
            setSubmenu2(false);
        }
        else {
            setSubmenu2(true);
        }
    };


    return (
        <>
            <div className="main-yellow">
                <div className="left-side-menu">
                    <div className="studio-title">
                        <img src={f} alt="profile-pic" />
                        <span className="studio-name">Admin</span>
                    </div>
                    <div className="main-menu">
                        <Link to="/dashboard" className="dashboard-selected">
                            <div className="main-menu-content">
                                <span> Dashboard</span>
                            </div>
                        </Link>
                        <Link className="inbox-selected sub-menu" onClick={hoverFunction1}>
                            <div className="main-menu-content">
                                <span>Studio Section</span>
                            </div>
                        </Link>
                        <div className="dropdown-menu" style={submenu1 ? dis1 : notDis1}>
                            <Link to="/studiosectionactive">
                                <div className="drop-active">
                                    <span>Active User</span>
                                </div>
                            </Link>
                            <Link to="/studiosectioninactive">
                                <div className="drop-active">
                                    <span>Inactive User</span>
                                </div>
                            </Link>
                            <Link to="/studiosubscription">
                                <div className="drop-active">
                                    <span>Subscription</span>
                                </div>
                            </Link>
                            <Link to="/studioquery">
                                <div className="drop-active">
                                    <span>Query</span>
                                </div>
                            </Link>
                            <Link to="/notificationstudio">
                                <div className="drop-active">
                                    <span>Notification</span>
                                </div>
                            </Link>
                        </div>
                        <Link className="jobs-selected" onClick={hoverFunction2}>
                            <div className="main-menu-content" >
                                <span>Audition Section</span>
                            </div>
                        </Link>
                        <div className="dropdown-menu" style={submenu2 ? dis2 : notDis2}>
                            <Link to="/auditionsectionactive">
                                <div className="drop-active">
                                    <span>Active User</span>
                                </div>
                            </Link>
                            <Link to="/auditionsectioninactive">
                                <div className="drop-active">
                                    <span>Inactive User</span>
                                </div>
                            </Link>
                            <Link to="/auditionsubscription">
                                <div className="drop-active">
                                    <span>Subscription</span>
                                </div>
                            </Link>
                            <Link to="/studioquery">
                                <div className="drop-active">
                                    <span>Query</span>
                                </div>
                            </Link>
                            <Link to="/notificationaudition">
                                <div className="drop-active">
                                    <span>Notification</span>
                                </div>
                            </Link>
                        </div>
                        <Link to="/promoreq" className="connection-selected">
                            <div className="main-menu-content">
                                <span>Promotion Request</span>
                            </div>
                        </Link>

                        <Link className="invite-selected">
                            <div className="main-menu-content">
                                <span>Management</span>
                            </div>
                        </Link>



                    </div>
                </div>
            </div>
            <div className="main-white">
                <div className="top-div">
                    <input type="text" placeholder="Search here..." />
                    <button className="notification-button"><img src={notification}
                        alt="notification" /></button>
                    <button className="setting-button"><img src={setting} alt="setting" /></button>
                </div>
                <div className="main-white-left">
                    <div className="graph-area">
                        <img src={graph} alt="graph" className="graph-image" />
                    </div>

                    <section className="overview">
                        <div className="over">
                            <h2>Overview</h2>
                        </div>
                        <hr />
                        <div className="overview-studio">
                            <div className="studio">
                                <h3>Studio</h3>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>

                        </div>
                        <div className="overview-studio">
                            <div className="studio">
                                <h3>Audition</h3>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>
                            <div className="studio-user-details">
                                <div className="active-user">
                                    <span>Active user</span>
                                </div>
                                <hr />
                                <div className="number">
                                    464K
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="popular-studios">
                        <div className="pop-stud">
                            <h2>Popular Studios</h2>
                        </div>
                        <hr />
                        <div className="p-s-title">
                            <span>Studio</span>
                            <span>Created By</span>
                            <span>Subscription</span>
                            <span>Country</span>
                            <span>Followers</span>
                            <span>Posted Jobs</span>
                        </div>
                        <div className="p-s-studio-details">
                            <span>Fuga et ut Studio</span>
                            <span className='p-s-s-i'><img src={studioImage} alt="" /> Fuga et ut Studio</span>
                            <span>Gold</span>
                            <span>Zimbabwe</span>
                            <span>456K</span>
                            <span>456</span>
                        </div>
                        <div className="p-s-studio-details">
                            <span>Fuga et ut Studio</span>
                            <span className='p-s-s-i'><img src={studioImage} alt="" /> Fuga et ut Studio</span>
                            <span>Gold</span>
                            <span>Zimbabwe</span>
                            <span>456K</span>
                            <span>456</span>
                        </div>
                        <div className="p-s-studio-details">
                            <span>Fuga et ut Studio</span>
                            <span className='p-s-s-i'><img src={studioImage} alt="" /> Fuga et ut Studio</span>
                            <span>Gold</span>
                            <span>Zimbabwe</span>
                            <span>456K</span>
                            <span>456</span>
                        </div>
                        <div className="p-s-studio-details">
                            <span>Fuga et ut Studio</span>
                            <span className='p-s-s-i'><img src={studioImage} alt="" /> Fuga et ut Studio</span>
                            <span>Gold</span>
                            <span>Zimbabwe</span>
                            <span>456K</span>
                            <span>456</span>
                        </div>
                        <div className="p-s-studio-details">
                            <span>Fuga et ut Studio</span>
                            <span className='p-s-s-i'><img src={studioImage} alt="" /> Fuga et ut Studio</span>
                            <span>Gold</span>
                            <span>Zimbabwe</span>
                            <span>456K</span>
                            <span>456</span>
                        </div>
                    </section>
                </div>

            </div>
        </>
    );
}

export default Dashboard
