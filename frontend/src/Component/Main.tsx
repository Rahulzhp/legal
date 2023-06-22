import React, { useEffect, useState } from 'react'
import "./Main.css";
import logo2 from "../Icons/Pro.png";

import profile from "../Icons/profile_pic.png";

const Main = () => {
    const [isMobile, setIsMobile] = useState(false);

    const [activeIcon, setActiveIcon] = useState("dashboard");
    const handleIconClick = (icon) => {
        setActiveIcon(icon);
    };

    return (
        <div className={`Main_container ${isMobile ? "mobile" : ""}`}>
            <div className={`sidebar ${isMobile ? "mobile" : ""}`}>
                {/* Sidebar content goes here */}
                <div className="sidebar-icons">Company Details</div>
            </div>
            <div className={`body ${isMobile ? "mobile" : ""}`}>
                <nav
                    className="DashboardNav"
                    style={{
                        height: "50px",
                        padding: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        position: 'fixed',
                        top: '0'
                        , width: '100%'
                    }}
                >
                    <div style={{ display: "flex" }}>
                        <img src={logo2} alt="" style={{ width: "20%" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img
                            src={profile}
                            alt="porfile"
                            style={{
                                width: "25%",
                                borderRadius: "50%",
                                border: "1px solid green",
                            }}
                        />
                        <p>Hello John Doe</p>
                    </div>
                </nav>
                {/* Body content goes here */}
                <div className="ContentArea">
                    <div>
                        <div>
                            <h1>Company Information</h1>
                            <div>
                                <div>
                                    <p>Operating company</p>
                                    <h3>Pro Legal Serve</h3>
                                </div>

                                <div>
                                    <p>Company type</p>
                                    <h3>B2B</h3>
                                </div>
                                <div>
                                    <p>Law firm or buisness name</p>
                                    <h3>Flash</h3>
                                </div>
                            </div>
                            <div id="div">
                                <p>Address 1</p>
                                <h3>Company Address</h3>
                            </div>

                            <div>
                                <div>
                                    <p>State</p>
                                    <h3>State</h3>
                                </div>

                                <div>
                                    <p>City</p>
                                    <h3>City</h3>
                                </div>
                                <div>
                                    <p>County</p>
                                    <h3>County</h3>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <p>Zip code</p>
                                    <h3>Zip code</h3>
                                </div>

                                <div>
                                    <p>Phone number</p>
                                    <h3>1234567890</h3>
                                </div>

                            </div>
                        </div>
                        <div>
                            <h1>Law firm information</h1>
                            <div>
                                <div>
                                    <p>Firm speciality</p>
                                    <h3>Family Law</h3>
                                </div>
                                <div>
                                    <p>Case managment</p>
                                    <h3>Server Manager</h3>
                                </div>
                            </div>
                            <div id="div">
                                <p>Account manager</p>
                                <h3>Account manager</h3>
                            </div>
                        </div>
                        <div>
                            <h1>Company notification settings</h1>
                            <div>
                                <div>
                                    <p>New user invited</p>
                                    <h3>Email</h3>
                                </div>
                                <div>
                                    <p>New user added</p>
                                    <h3>Email</h3>
                                </div>
                                <div>
                                    <p>Payment method changed</p>
                                    <h3>Email</h3>
                                </div>
                            </div>
                        </div>
                        <div id="button">
                            <button>click</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main