import React from 'react';
import emailjs from 'emailjs-com';


const ContactUs = ({
    closeForm,
    setShowToast,
    userName,
    userEmail,
}) => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_9nrro1v', 'template_u4m75et', e.target, 'zE24kn11zGyMJhmdK')
            .then((result) => {
                closeForm();
                setShowToast(true);
                e.preventDefault();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <label>User name:</label>
            <input type="text" name="to_name" />
            <label>Your name:</label>
            <input type="text" name="from_name" value={userName} />
            <br />
            <br />
            <label>User Email:</label>
            <input type="email" name="to_email" />
            <label>Your Email:</label>
            <input type="email" name="from_email" value={userEmail} />
            <br />
            <br />
            <label>Message:</label>
            <textarea style={{ width: 532 }} name="html_message" />
            <input type="submit" value="Send" />
        </form>
    );
}

export default ContactUs;