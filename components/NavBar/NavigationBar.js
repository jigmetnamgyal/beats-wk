import React, {useState} from 'react'
import NavBar from './Navbar';
import SideBar from './tools/SideBar';

const NavigationBar = () => {
    const [toggleFlag, setToggleFlag] = useState(false);

    const hamHandler = () => {
        if(!toggleFlag){
            setToggleFlag(true)
        }
        
    }
    const closeHandler = () => {
        setToggleFlag(false);
    }
    return (
        <div>
            <NavBar hamHandler={hamHandler}/> 
            {toggleFlag && <SideBar close={closeHandler} show={toggleFlag}/>}
        </div>
    )
}

export default NavigationBar
