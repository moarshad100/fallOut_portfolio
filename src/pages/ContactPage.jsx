import React, { useState } from "react";

const linkStyle = { alignItems: "left", justifyContent: "left" };

function sayHello() {
  alert("hello");
}

function Contact() {
  return (
    <section style={linkStyle}>
      <h1>Contact</h1>
      <hr />
      <input type="text" name="name" id="name" placeholder="name" />
      <br />
      <input type="email" name="email" id="email" placeholder="email" />
      <br />
      <textarea
        id="subject"
        name="subject"
        placeholder="message"
        style={{ minHeight: "200px", width: "190px", maxHeight: "200px" }}
      ></textarea>
      <br />
      <button onClick={sayHello}>Submit</button>
    </section>
  );
}

export default Contact;
