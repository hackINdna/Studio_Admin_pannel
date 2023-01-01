import React, { useState } from 'react';
import f from './images/f.png';
import notification from './images/icons/notification.svg';
import setting from './images/icons/setting-icon.svg';
import studioImage from './images/f.png';
import editIcon from './images/icons/edit.svg';
import deleteIcon from './images/icons/delete.svg';
import addIcon from './images/icons/add.svg';
import studioIconImage from './images/f.png';
import './css/dashboard.css';
import './css/dashboard-resp.css';

import { Link } from "react-router-dom";

function NotificationAudition() {

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
                <div className="main-white-left1">
                    <section className="popular-studios1">

                        <div className="pop-stud1">
                            <h2>Popular Studios</h2>
                            <div className="icons-area">
                                <img src={editIcon} alt="edit-icon" />
                                <img src={deleteIcon} alt="edit-icon" />
                                <img src={addIcon} alt="edit-icon" />
                            </div>
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
                        <div className="scroll-area">
                            <div className="p-s-studio-details">
                                <span>Fuga et ut Studio</span>
                                <span className='p-s-s-i'><img src={studioImage} alt="" /> Fuga et ut Studio</span>
                                <span>Gold</span>
                                <span>Zimbabwe</span>
                                <span>456K</span>
                                <span>456</span>
                            </div>

                            <div className="studio-desc-admin">
                                <section className="desc-first">
                                    <div className="st-name">
                                        <div className="st-name-img">
                                            <img src={studioIconImage} alt="studio-icon" />
                                        </div>
                                        <div className="st-name-name">
                                            <span>Fuga et ut Studio</span>
                                            <span>(Zimbabwe)</span>
                                        </div>
                                    </div>
                                    <div className="subs-std">
                                        <h3>Subscription: Gold</h3>
                                        <span>35 Days left</span>
                                    </div>
                                </section>
                                <section className="desc-second">
                                    <span>Studio: Fuga et ut Studio</span>
                                    <span>Followers: 35K</span>
                                </section>
                                <section className="desc-third">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque praesentium, eius at voluptatum dolores voluptates maiores molestiae obcaecati inventore quos numquam et, impedit dicta eveniet alias sint tenetur, quam modi voluptatem non. Vitae eveniet accusantium obcaecati fugiat incidunt labore facere porro? Molestiae deserunt adipisci porro enim, totam rem ducimus! Voluptatum mollitia, suscipit aut ad unde aliquam facere tenetur nesciunt blanditiis dolore nisi. Doloremque accusamus ullam, ipsa adipisci quidem voluptate enim! Laudantium voluptate nobis nam quod aliquam voluptatum, vero amet maiores provident similique neque tenetur? Suscipit voluptatum, magni explicabo tempore officiis non, ab, totam fugit pariatur distinctio natus soluta consequuntur. In quae eaque expedita vitae eos autem architecto, ea possimus tempora, error provident itaque! Dolorum dicta deleniti rem vitae repellendus soluta ipsum minus illo, dolor dignissimos, vel labore porro? Aut explicabo natus velit illo ex at consectetur delectus consequatur voluptatem error nisi suscipit, ut dolor libero dicta incidunt iure tempore repudiandae obcaecati cumque qui facilis nam quasi! Illum possimus, voluptatum aut impedit saepe facere ea excepturi dolorum sunt quae sit voluptatibus ipsum quidem. In consequuntur neque iste enim corrupti rerum amet architecto illum est, eos incidunt consectetur maiores voluptate nam ratione dolore! Consectetur voluptate ut, facilis voluptatum nesciunt aliquid perferendis quisquam!</p>
                                </section>
                                {/* <section className="desc-fourth">
                                    <button className="btn">Add</button>
                                    <button className="btn">Edit</button>
                                    <button className="btn">Delete</button>
                                </section> */}
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
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}

export default NotificationAudition
