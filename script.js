document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let isValid = true;

    
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = ""; 
    }


    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\d{10}$/;
    if (phone.value.trim() === "" || !phonePattern.test(phone.value)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }
    const address = document.getElementById('address');
    const addressError = document.getElementById('addressError');
    if (address.value.trim() === "") {
        addressError.textContent = "Address is required";
        isValid = false;
    } else {
        addressError.textContent = "";
    }

    
    const city = document.getElementById('city');
    const cityError = document.getElementById('cityError');
    if (city.value === "") {
        cityError.textContent = "Please select a city";
        isValid = false;
    } else {
        cityError.textContent = "";
    }


    const pincode = document.getElementById('pincode');
    const pincodeError = document.getElementById('pincodeError');
    const pinPattern = /^\d{6}$/;document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let isValid = true;
    
    
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        } else {
            nameError.textContent = ""; 
        }
    
        
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phonePattern = /^\d{10}$/;
        if (phone.value === "" || !phonePattern.test(phone.value)) {
            phoneError.textContent = "Please enter a valid 10-digit phone number";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }
    
        
        const address = document.getElementById('address');
        const addressError = document.getElementById('addressError');
        if (address.value === "") {
            addressError.textContent = "Address is required";
            isValid = false;
        } else {
            addressError.textContent = "";
        }
    
        
        const city = document.getElementById('city');
        const cityError = document.getElementById('cityError');
        if (city.value === "") {
            cityError.textContent = "Please select a city";
            isValid = false;
        } else {
            cityError.textContent = "";
        }
    
        
        const pincode = document.getElementById('pincode');
        const pincodeError = document.getElementById('pincodeError');
        const pinPattern = /^\d{6}$/;
        if (pincode.value === "" || !pinPattern.test(pincode.value)) {
            pincodeError.textContent = "Please enter a valid 6-digit pincode";
            isValid = false;
        } else {
            pincodeError.textContent = "";
        }
    
    
        const gender = document.getElementById('gender');
        const genderError = document.getElementById('genderError');
        if (gender.value === "") {
            genderError.textContent = "Please select your gender";
            isValid = false;
        } else {
            genderError.textContent = "";
        }
    
        
        const dob = document.getElementById('dob');
        const dobError = document.getElementById('dobError');
        if (dob.value === "") {
            dobError.textContent = "Date of Birth is required";
            isValid = false;
        } else {
            dobError.textContent = "";
        }
    
        const about = document.getElementById('about');
        const aboutError = document.getElementById('aboutError');
        if (about.value === "") {
            aboutError.textContent = "Please provide some information about yourself";
            isValid = false;
        } else {
            aboutError.textContent = "";
        }
    
        
        if (isValid) {
            document.getElementById('successMessage').style.display = 'block';
        } else {
            document.getElementById('successMessage').style.display = 'none';
        }
    });
    

    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
    } else {
        document.getElementById('successMessage').style.display = 'none';
    }
});

