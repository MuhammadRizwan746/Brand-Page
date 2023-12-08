import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {BiMessageDetail} from 'react-icons/bi';
import {BiPhoneCall} from 'react-icons/bi';
import {HiMail} from "react-icons/hi"

const ContactFrom = () => {
  const [name,setName] = useState('');  
  const [email,setEmail] = useState('');  
  const [text,setText] = useState('');

  const onSubmit = (event) => {
    setIsClicked(true);
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
   <section className= {styles.containerr}>

     <div className={styles.containerfrom}>
     <div className={styles.topsection}>
        <Button text = "VIA SUPPORT CHAT" icon = {<BiMessageDetail fontSize= "20px"/>}/>
        <Button 
        // onClick= {onvivasubmi }
        
        text = "VIA Call" icon = {<BiPhoneCall fontSize= "20px"/>}/>
       </div> 
        <Button isOutLine = "true" text = "VIA EMAIL FROM" icon = {<HiMail  fontSize= "20px"/>}/>

        <form 
         onSubmit={onSubmit}>
          <div className={styles.formcontroler}>
          <label htmlFor="name"> Name</label>
           <input type="name" name="name"/>
          </div>

          <div className={styles.formcontroler}>
          <label htmlFor="eamil">Email</label>
           <input type="email" name="email"/>
          </div>

          <div className={styles.formcontrolerr}>
          <label htmlFor="text">Text</label>
           <textarea  name="text"/>
          </div>

            <div className={styles.submit_btn}>
            <Button text = "SUBMIT"/>
            </div>
        <div>{`Name : ${name} Email : ${email} Text : ${text}`}</div>
        </form>
     </div>
     <div className={styles.contactimag}>
        <img src="/images/service.png" alt="logo" />
     </div>

   </section>
  )
}

export default ContactFrom;
