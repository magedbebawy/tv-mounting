import React, { useState} from "react";
import './contact.css'
function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="contact">
            <h2>Send us a message/question</h2>
            <form onSubmit={''}>
                <input required={true} type="text" value={name} placeholder='Full name' onChange={e => setName(e.target.value)}/>
                <input required={true} type="tel" value={phone} placeholder='Phone' onChange={e => setPhone(e.target.value)}/>
                <input required={true} type="email" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                <textarea required={true} className="message" type="text" value={message} placeholder='Message' onChange={e => setMessage(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;