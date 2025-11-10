document.getElementById("year").textContent=new Date().getFullYear();
const form=document.getElementById("contact-form"),status=document.getElementById("form-status");
if(form){form.addEventListener("submit",async e=>{e.preventDefault();status.textContent="Sending...";
try{await fetch("https://formspree.io/f/YOUR_FORM_ID",{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});status.textContent="Message sent!";form.reset()}catch{status.textContent="Error sending message"}})}
