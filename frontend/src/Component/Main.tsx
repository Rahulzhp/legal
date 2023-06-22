import React, { useEffect, useState } from 'react'
import "./Main.css";
import logo2 from "../Icons/Pro.png";
import bell from "../Icons/Group4.png"

import profile from "../Icons/Group3.png";
import axios from 'axios';
import Content from './Content';




const Main = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/posts")
            .then((res) => setData(res.data))
            .catch((er) => {
                console.log(er)
            })
    }, [])

    return (
        <div className={`Main_container`}>
            <div className={`sidebar`}>
                {/* Sidebar content goes here */}
                <div className="sidebar-icons">Company Details</div>
            </div>
            <div className={`body`}>
                <nav
                    className="DashboardNav"
                    style={{
                        height: "139px",
                        padding: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        position: 'fixed',
                        top: '0',
                        width: '100%',
                        backgroundColor: "#FFFFFF"
                    }}
                >
                    <div style={{ display: "flex" }}>
                        <img src={logo2} alt="" style={{ width: "202px", height: "58px", top: "40px", left: "30px" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div >
                            <img src={bell} style={{ width: "71px", marginRight: "9px" }}></img>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <img
                                src={profile}
                                alt="porfile"
                                style={{ width: "173px", marginTop: "-5px", }}
                            />

                        </div>
                    </div>
                </nav>
                {/* Body content goes here */}
                {
                    data && data.map((el, id) => <Content prop={el} key={id} />)
                }

            </div>
        </div>
    );
};

export default Main