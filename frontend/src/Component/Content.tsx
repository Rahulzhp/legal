import React from 'react'
import "./Main.css"
import { Container, Box, Flex, Text, Button, Paper } from "@mantine/core";
import { BsArrowRightShort } from "react-icons/bs"




const Content = ({ prop }) => {
    console.log(prop)
    return (
        <div className="ContentArea">
            <div>
                <div>
                    <h1>Company Information</h1>
                    <Flex>
                        <div>
                            <p>Operating company</p>
                            <h3>{prop.Operating_Company}</h3>
                        </div>

                        <div>
                            <p>Company type</p>
                            <h3>{prop.Company_type}</h3>
                        </div>
                        <div>
                            <p>Law firm or buisness name</p>
                            <h3>{prop.law}</h3>
                        </div>
                    </Flex>
                    <div id="div">
                        <p>Address 1</p>
                        <h3>{prop.Adress1}</h3>
                    </div>

                    <Flex>
                        <div>
                            <p>State</p>
                            <h3>{prop.state}</h3>
                        </div>

                        <div>
                            <p>City</p>
                            <h3>{prop.city}</h3>
                        </div>
                        <div>
                            <p>County</p>
                            <h3>{prop.country}</h3>
                        </div>
                    </Flex>


                    <Flex>
                        <div>
                            <p>Zip code</p>
                            <h3>{prop.zip}</h3>
                        </div>

                        <div>
                            <p>Phone number</p>
                            <h3>{prop.phone}</h3>
                        </div>

                    </Flex>
                </div>
                <div>
                    <h1>Law firm information</h1>
                    <Flex>
                        <div>
                            <p>Firm speciality</p>
                            <h3>{prop.FS}</h3>
                        </div>
                        <div>
                            <p>Case managment</p>
                            <h3>{prop.Case_mangement}</h3>
                        </div>
                    </Flex>
                    <div id="div">
                        <p>Account manager</p>
                        <h3>{prop.Account_manager}</h3>
                    </div>
                </div>
                <div>
                    <h1>Company notification settings</h1>
                    <Flex>
                        <div>
                            <p>New user invited</p>
                            <h3>{prop.New_User_Inv}</h3>
                        </div>
                        <div>
                            <p>New user added</p>
                            <h3>{prop.New_User_added}</h3>
                        </div>
                        <div>
                            <p>Payment method changed</p>
                            <h3>{prop.Payment_mail}</h3>
                        </div>
                    </Flex>
                </div>
                <div id="button">
                    <button>Next <BsArrowRightShort size={21} /></button>
                </div>
            </div>
        </div>
    )
}

export default Content