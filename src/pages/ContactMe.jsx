import { useState } from 'react';



function ContactMe() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
   
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Form submitted:', formData);
  
    };
  
    return (
      <div className="contact-me">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => {
                if (!formData.name) {
                  document.getElementById("name-notice").style.display = "block";
                } else {
                  document.getElementById("name-notice").style.display = "none";
                }
              }}
              required
            />
            <p id="name-notice" class="red-text">Name is required!</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p class="red-text">Email is required!</p>

          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <p class="red-text">Message is required!</p>

          </div>
          <button type="submit">Send</button>
        </form>
    
     
      </div>
       
     
    );
  }
  
  export default ContactMe;