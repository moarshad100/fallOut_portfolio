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
      <textarea
        id="subject"
        name="subject"
        placeholder="message"
        style={{ height: "200px", width: "190px" }}
      ></textarea>
      <br />
      <button onClick={sayHello}>Submit</button>
    </section>
  );
}

export default Contact;
