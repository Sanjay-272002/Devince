import React ,{useState}from 'react'
import './Contact.css'
import contact from './contactimage/contact.jpeg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phno:'',
    email: '',
    reqser:'',
    message: ''
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted:', formData);
   
    setFormData({
      name: '',
      email: '',
      phno:'',
      reqser:'',
      message: ''
    });
  };

  return (
    <div id='contactdiv' className="contact-main">
      <div className="contact">
        Contact Us
      </div>
      <div className="contact-input">
        <div className="c">
          <input
            className="name box"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          /><br />
           <input
            className="name box"
            type="text"
            name="phno"
            placeholder="Phone Number"
            value={formData.phno}
            onChange={handleChange}
          /><br />
          <input
            className="email box"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          /><br />
           <input
            className="email box"
            type="text"
            name="reqser"
            placeholder="Required Service"
            value={formData.reqser}
            onChange={handleChange}
          /><br />
          <input
            className="message box"
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          /><br />
          <button
            className="send-button box"
            type="button" 
            onClick={handleSubmit}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact