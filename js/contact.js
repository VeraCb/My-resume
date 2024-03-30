// =============== EMAIL JS ==============
/*const contactForm = document.getElementById('contact-form')
const contactMessages= document.getElementById('contact-messages')


const sendEmail = (e) => {
  e.preventDeFault()

  // serviceID - templateID- #form - publicKey
  emailjs.sendForm('bogosveronica98@gmail.com')
     .then(() => {
      // show send message

     contactMessages.textContent = 'Message sent successfully ✅'

      // remove message after 5 seconds
      setTimeout(() => {
        contactMessages.textContent = ''
      }, 5000)
     })
}

contactForm.addEventListener('submit', sendEmail);*/

// let changeName = 'Vera Bogos'
// function updateName() {
//   let el = document.getElementById('contact-messages')
//   el.textContent = changeName;

//   setTimeout(() => {
//     contactMessages.textContent = ''
//   }, 5000)
// }
//     updateName(); 

// function sendMail() {
//   const mailSeding = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value
//   };

//   const serviceID = "service_2xto6nr";
//   const templatatID = "template_tjrz43p";
//   const contactMessages = document.getElementById('contact-messages');

//   emailjs.send(serviceID, templatatID, mailSeding)
//     .then(res => {
//       document.getElementById('name').value = "";
//       document.getElementById('email').value = "";
//       document.getElementById('message').value = "";
//       console.log(res);

//       contactMessages.textContent = "Mesaj trimis cu succes ✅";

//       setTimeout(() => {
//         contactMessages.textContent = '';
//       }, 5000);
//     });
// }

