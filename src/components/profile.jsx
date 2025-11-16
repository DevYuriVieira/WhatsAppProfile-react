import { TbMessageFilled } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";
import { MdVideocam } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";

function Profile({nome = "Usuário do WhatsApp", 
    imgUrl ="https://png.pngtree.com/png-vector/20250818/ourmid/pngtree-whatsapp-default-profile-photo-vector-png-image_17034397.webp"}){

        const[isOnline, setIsOnline] = useState(true);

        function alterarStatus(){
            setIsOnline((isOnline)=> !isOnline);
        }

    return(
        <div className="profile-container">
            <div className="profile-name">{nome} 
                {isOnline ? (
                <div className="status-online"></div>
                ):(
                <div className="status-offline"></div>)}
                </div>
            <img src= {imgUrl}/>
            <div className="profile-actions">
                <button className="icon-btn"><TbMessageFilled color="green" /></button>
                <button className="icon-btn"><IoMdCall color="green" /></button>
                <button className="icon-btn"><MdVideocam color="green" /></button>
                <button className="icon-btn"><BsInfoCircle color="green"/></button>
            </div>
            <div className="status-action">
                {isOnline ? <button onClick={alterarStatus} className="invisible">MODO INVISIVEL</button> : <button onClick={alterarStatus} className="online">MODO ONLINE</button>}
            </div>
        </div>
    );
}


export default Profile; 