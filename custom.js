

document.getElementById('tourForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dateTime = document.getElementById('dateTime').value;
    const numAdults = document.getElementById('numAdults').value;
    const numChildren = document.getElementById('numChildren').value;
    const childrenAges = document.getElementById('childrenAges').value;
    const numRooms = document.getElementById('numRooms').value;
    const departureCity = document.getElementById('departureCity').value;
    const tourType = document.getElementById('tourType').value;
    const tripDuration = document.getElementById('tripDuration').value;
    const notes = document.getElementById('notes').value;
    
    // Construct the message for WhatsApp
    const message = `*Tour Booking Details*\n\n` +
        `*Name:* ${firstName} ${lastName}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n` +
        `*Date/Time:* ${dateTime}\n` +
        `*Number of Adults:* ${numAdults}\n` +
        `*Total Number of Children:* ${numChildren}\n` +
        `*Children Ages:* ${childrenAges}\n` +
        `*Number of Rooms:* ${numRooms}\n` +
        `*Departure From (City):* ${departureCity}\n` +
        `*Tour Type:* ${tourType}\n` +
        `*Duration of Trip:* ${tripDuration}\n` +
        `*Notes:* ${notes}`;
    
    // Encode the message to be URL-friendly
    const encodedMessage = encodeURIComponent(message);
    
    // Your WhatsApp number
    const phoneNumber = '+923054122637';
    
    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
});


document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var message = document.getElementById("messageInput").value;
    var phoneNumber = "+923054122637"; // Replace with the recipient's WhatsApp number

    // Construct the WhatsApp message URL
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
});
