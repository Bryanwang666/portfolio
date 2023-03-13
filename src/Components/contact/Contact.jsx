import { useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [message,setMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(true)
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message.");
      });
  };
  
  return (
    <div className="contact"id='contact'>
      <div className="left">
        <img src="images/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input  placeholder='Email'type="email"id="email"value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea placeholder='Message' value={messages} onChange={(e) => setMessages(e.target.value)}></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'ill reply to you ASAP!</span>}
        </form>
      </div>
    </div>
  )
}
