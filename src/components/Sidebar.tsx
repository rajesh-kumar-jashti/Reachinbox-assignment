import { BarChart2, Home, InboxIcon, List, Mail, Send, UserRoundSearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import Icon from './Icons';
import logoo from "../assets/icons/logoo.png"
import whitelogo from '../assets/whiteLogo.png'

interface SidebarProps {
    currTheme: Boolean;
    username: string;
    showEmailDesktop: number;
    handleChange: any
}


const Sidebar: React.FC<SidebarProps> = ({ currTheme, username, handleChange }) => {

    const [activeIcon, setActiveIcon] = useState<number>(0);

    const handleIconClick = (index: number) => {
        setActiveIcon(index);
        handleChange(index)
    };

    return (
        <div style={{borderRight: "2px solid #343A40", background: currTheme ? "#101113" : "white", height: "100vh", display: "flex", flexDirection: "column",}}>
            <div>
                <div className='w-12 h-[70px] flex justify-center items-center'>
                    <img src={currTheme? logoo: whitelogo} alt="logo" className='w-6 h-6 rounded' />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "60px" }}>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 0} onClick={() => handleIconClick(0)}>
                        <Home style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 1} onClick={() => handleIconClick(1)}>
                        <UserRoundSearchIcon style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 2} onClick={() => handleIconClick(2)}>
                        <Mail style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 3} onClick={() => handleIconClick(3)}>
                        <Send style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 4} onClick={() => handleIconClick(4)}>
                        <List style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 5} onClick={() => handleIconClick(5)}>
                        <InboxIcon style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 6} onClick={() => handleIconClick(6)}>
                        <BarChart2 style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                </div>
            </div>

            <div style={{height: "40px", marginTop: "250px", marginLeft: "7px", width: "40px", background: "#054F31", borderRadius: "30px"}}>
                {/* <p>{username}</p> */}
                <p style={{paddingTop: "8px"}}>RK</p>
            </div>
        </div>
    );
}

export default Sidebar;

