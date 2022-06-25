import React from "react";

function ContactItemImage({imageUrl}) {
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt="contact avaratr"/>
        </div>
    )
}

export default ContactItemImage