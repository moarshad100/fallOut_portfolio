// const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

const linkStyle = { alignItems: "left", justifyContent: "left" };

function sayHello() {
  alert("You clicked me!");
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
      <input type="text" name="message" id="message" placeholder="Message" />
      <br />
      <button onClick={sayHello}>Submit</button>
    </section>
  );
}

export default Contact;
