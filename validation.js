document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const inputs = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        password: this.querySelector('input[type="password"]').value,
        day: this.querySelectorAll('input[type="number"]')[0].value,
        month: this.querySelectorAll('input[type="number"]')[1].value,
        year: this.querySelectorAll('input[type="number"]')[2].value,
        gender: this.querySelector('select').value
    };

    // Validation
    if (inputs.password.length < 8) {
        alert('Password must be at least 8 characters!');
        return;
    }

    if (inputs.day < 1 || inputs.day > 31 || 
        inputs.month < 1 || inputs.month > 12 || 
        inputs.year < 1900) {
        alert('Please enter a valid date!');
        return;
    }

    // Success message
    alert(`Signup Successful!\n
Name: ${inputs.name}
Email: ${inputs.email}
Birth Date: ${inputs.day}/${inputs.month}/${inputs.year}
Gender: ${inputs.gender}`);

    // Reset form
    this.reset();
});