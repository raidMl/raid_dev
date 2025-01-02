async function sendMessageFunc(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Collect form data
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Create payload
    const payload = {
      email: email,
      message: message,
    };
  
    // Send data to API
    try {
      const response = await fetch('http://localhost:3000/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  }
  

  //convert to js 

