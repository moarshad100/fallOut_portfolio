// const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
import Button from '@mui/material/Button'

const linkStyle = {alignItems: "left", justifyContent: "left"};

function sayHello()
{
    alert('You clicked me!');

}

function Contact(){
    return(
        <section style={linkStyle}>
        <h1>Contact</h1>
        <hr />        
        <textarea name="name" id="name" cols="30" rows="1" placeholder="Name"></textarea>        
        <br />
        <textarea name="email" id="email" cols="30" rows="1" placeholder="Email"></textarea>
        <br />
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
        <br />
        <button onClick={sayHello}>Submit</button>
        </section>
    )

}

export default Contact;
