// app.js
// JavaScript for CRUD operations

function createQuote() {
    const bookInput = document.getElementById('bookInput').value;
    const quoteInput = document.getElementById('quoteInput').value;

    fetch('http://localhost:3000/quotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ book: bookInput, quote: quoteInput }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Quote created successfully!');
        // Clear input fields or update UI as needed
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error creating quote');
    });
}

function getQuotes() {
    fetch('http://localhost:3000/quotes')
    .then(response => response.json())
    .then(data => {
        const quoteList = document.getElementById('quoteList');
        quoteList.innerHTML = '<h2>Quotes:</h2>';
        
        data.forEach(quote => {
            const quoteDiv = document.createElement('div');
            quoteDiv.innerHTML = `<strong>${quote.book}:</strong> ${quote.quote}`;
            quoteList.appendChild(quoteDiv);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error getting quotes');
    });
}
