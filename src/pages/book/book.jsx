import React, {useState} from "react";
import './book.css'
function Book() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tvSize, setTvSize] = useState('');
    const [bracket, setBracket] = useState('');
    const [addons, setAddons] = useState('');
    return (
        <div>
            <div className="book-service">
            <h2>Book a service</h2>
            <form onSubmit={''}>
                <select id="dropdown" name="dropdown" value={tvSize} onChange={e => setTvSize(e.target.value)}>
                    <option value="">What is the TV size</option>
                    <option value="75">Under 55 inch</option>
                    <option value="95">55 to 65 inch</option>
                    <option value="120">Over 65 inch</option>
                </select>
                <select id="dropdown" name="dropdown" value={bracket} onChange={e => setBracket(e.target.value)}>
                    <option value="">What bracket (mount) do you need?</option>
                    <option value="75">Under 55 inch</option>
                    <option value="95">55 to 65 inch</option>
                    <option value="120">Over 65 inch</option>
                </select>
                <select id="dropdown" name="dropdown" value={addons} onChange={e => setAddons(e.target.value)}>
                    <option value="">Additional services?</option>
                    <option value="75">Under 55 inch</option>
                    <option value="95">55 to 65 inch</option>
                    <option value="120">Over 65 inch</option>
                </select>
                <input required={true} type="text" value={name} placeholder='Full name' onChange={e => setName(e.target.value)}/>
                <input required={true} type="tel" value={phone} placeholder='Phone' onChange={e => setPhone(e.target.value)}/>
                <input required={true} type="email" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                <textarea required={true} className="message" type="text" value={message} placeholder='Additional comments' onChange={e => setMessage(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Book;