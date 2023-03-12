import React, { useState } from "react";
import logo from "../images/logo.svg";
import open from "../images/icon-menu.svg";
import close from "../images/icon-close-menu.svg";
import down from "../images/icon-arrow-down.svg"
import up from "../images/icon-arrow-up.svg"
import todo from "../images/icon-todo.svg";
import cale from "../images/icon-calendar.svg";
import remin from "../images/icon-reminders.svg";
import plan from "../images/icon-planning.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [dropDownF, setDropDownF] = useState(false);
  const [dropDownC, setDropDownC] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleDropDownF = () =>{
    setDropDownF(!dropDownF)
  }
  const handleDropDownC = () =>{
    setDropDownC(!dropDownC)
  }



  return (
    <>
      <div className="container-fluid">
        <div className="navbarr">
        <div className="logo">
          <a href="#">
            {" "}
            <img  src={logo} alt="log" />{" "}
          </a>

        </div>
        <div className="main-menu"> 
          <a onClick={handleDropDownF}  href="#">Features <img  className="ms-2" src={dropDownF ? up : down }/></a>
         
        {dropDownF  &&  
          
              <div className="menu-desktop">
                <a href="#"><img src={todo}/>Todo List</a>
                <a href="#"><img src={cale}/>Calendar</a>
                <a href="#"><img src={remin}/>Reminders</a>
                <a href="#"><img src={plan}/>Planning</a>
              </div>
              
          }

          <a  onClick={handleDropDownC} href="#">Company <img className="ms-2" src={dropDownC ? up : down }/></a>

          {dropDownC && 
                    <div className="menu-desktop-two">
                      <li>History</li>
                      <li>Our Team</li>
                      <li>Blog</li>
                    </div>
                  }
          <a  href="#">Careers</a>
          <a   href="#">About</a>
        
        </div>
        <div className=" main-buttons ms-auto">

          <button className=" btn btn-login"> Login</button>
          <button className=" btn btn-register">Register </button>
        </div>

          <button onClick={handleClick} className=" btn-open">
            {" "}
            <img src={open} />
          </button>
        </div>

        <div className={menu ? "menu" : "menu active"}>
          <div className="container section-container-slide">
            <div className={menu ? "slide" : "slide active"}>
              <button onClick={handleClick} className="btn-closee ">
                <img src={close} />
              </button>
              <ul>
                <li onClick={handleDropDownF} >Features <img  className="ms-2" src={dropDownF ? up : down }/></li>
                  {dropDownF && 
                    <ul className="dropdown">
                      <li> <img src={todo}/> Todo List</li>
                      <li> <img src={cale}/> Calendar</li>
                      <li><img src={remin}/> Reminders</li>
                      <li><img src={plan}/> Planning</li>
                    </ul>
                  }
                <li onClick={handleDropDownC} >Company <img className="ms-2" src={dropDownC ? up : down }/></li>
                {dropDownC && 
                    <ul className="dropdown">
                      <li> History </li>
                      <li> Our Team </li>
                      <li>Blog</li>
                    </ul>
                  }
                <li>Careers</li>
                <li>About</li>
              </ul>

              <div>
                <button className="btn btn-login"> Login</button>
              </div>
              <div>
                <button className="btn btn-register"> Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
