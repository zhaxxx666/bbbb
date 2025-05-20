
document.addEventListener('DOMContentLoaded', function() {
    // Reservation form submission
    const reservationForm = document.getElementById('reservation-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            
            if (!name || !email || !phone || !date || !time || !guests) {
                formError.classList.remove('hidden');
                formSuccess.classList.add('hidden');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            console.log({
                name,
                email,
                phone,
                date,
                time,
                guests,
                message: document.getElementById('message').value
            });
            
            // Show success message
            formSuccess.classList.remove('hidden');
            formError.classList.add('hidden');
            
            // Reset form
            reservationForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                formSuccess.classList.add('hidden');
            }, 5000);
        });
    }
    
    // Set minimum date for reservation to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        
        // Format date as YYYY-MM-DD
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        
        const minDate = today.getFullYear() + '-' + month + '-' + day;
        dateInput.setAttribute('min', minDate);
    }
});
