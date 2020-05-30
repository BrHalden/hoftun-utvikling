export default function addCabin(info) {
    document.getElementById('cabin-button').addEventListener('click', event => {
        const options = {
            method: 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)   
        }
        fetch('/api/cabins', options)
            .then(response => response.json())
            .then(res => {
            console.log(res);
        })
    })
} 