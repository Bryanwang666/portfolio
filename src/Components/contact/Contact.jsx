import { useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [message,setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, message };
    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setMessage(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message");
      });
  };
  
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  return (
    <div className="contact"id='contact'>
      <div className="left">
        <img src="images/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input  placeholder='Email'type="email"id="email"value={email}onChange={(e) => setEmail(e.target.value)}/>
          <textarea placeholder='Message' value={messages} onChange={(e) => setMessages(e.target.value)}></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'ill reply to you ASAP!</span>}
        </form>
      </div>
    </div>
  )
}
