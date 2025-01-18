var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }s
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-250px";
}

document.getElementById("resume-button-1").onclick = () => {
	window.open("https://drive.google.com/file/d/1DMSxlCK_49qKd3YV0RyLVcsst41NKc9m/view?usp=sharing", `_blank`)
}

document.getElementById("resume-button-2").onclick = () => {
	window.open("https://drive.google.com/file/d/1DMSxlCK_49qKd3YV0RyLVcsst41NKc9m/view?usp=sharing", `_blank`)
}

/*====== MESSAGE REQUEST ======*/

// Initialize EmailJS with your API (Public Key)
emailjs.init('8yvrDD4HMN60OiZNH'); 

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Status message element
    const statusMessage = document.getElementById("statusMessage");

    // Check if all fields are filled
    if (name && email && message) {
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };
        emailjs.send('service_1w4yxvm', 'template_uj3d6fu', templateParams)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                statusMessage.textContent = "Message sent successfully!";
                statusMessage.style.color = "green";
                document.getElementById("contactForm").reset();
            })
            .catch(error => {
                console.log('FAILED...', error);
                statusMessage.textContent = "Failed to send message. Please try again.";
                statusMessage.style.color = "red";
            });
    } else {
        statusMessage.textContent = "Please fill in all fields.";
        statusMessage.style.color = "red";
    }
}
document.getElementById("contactForm").addEventListener("submit", sendEmail);

// New Modification.
function opentab(tabName) {
    let tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach((tabContent) => tabContent.classList.remove('active-tab'));

    let tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach((tabLink) => tabLink.classList.remove('active-link'));

    document.getElementById(tabName).classList.add('active-tab');

    document.querySelector(`[onclick="opentab('${tabName}')"]`).classList.add('active-link');
}

// Feedback form Validation....
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const statusMessage = document.getElementById("statusMessage");

   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!nameInput.value.trim()) {
        statusMessage.textContent = "Please enter your name.";
        statusMessage.style.color = "red";
        return;
    }

    if (!emailRegex.test(emailInput.value)) {
        statusMessage.textContent = "Please enter a valid email address.";
        statusMessage.style.color = "red";
        return;
    }

    if (!messageInput.value.trim()) {
        statusMessage.textContent = "Please enter your message.";
        statusMessage.style.color = "red";
        return;
    }

    statusMessage.textContent = "Message sent successfully!";
    statusMessage.style.color = "green";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

});
