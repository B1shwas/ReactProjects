import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from '../Button/Button'
import styles from './ContactForm.module.css'
const ContactForm = () => {
  
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.btn_container}>
          <div className={styles.btn_top}>
            <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='20px' />} />
            <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='20px' />} />
          </div>
          <Button text='VIA EMAIL FORM' icon={<HiMail fontSize='20px' />} isOutline={true} />
        </div>

        <form>
          <div className={styles.form_control}>
          <label htmlFor='name'>Name</label>
          <input type="text" name='name' />
          </div>
          <div className={styles.form_control}>
          <label htmlFor='email'>E-Mail</label>
          <label type="email" name='email' />
          </div>
          <div className={styles.form_control}>
          <label htmlFor='text'>TEXT</label>
          <textarea type="text" name='text' />
          </div>
          <div style={{
            display:"flex",
            justifyContent:"end"
          }}>
          <Button text = "SUBMIT"/>
          </div>

        </form>
      </div>


      <div className={styles.contact_img}>
        <img src="/images/contact.svg" alt="Contact" />
      </div>

    </section>
  )
}

export default ContactForm