export function validateEmail(emailAddress) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailAddress)) {
        return false; // Basic format check failed
    }

    // Further checks for specific characters or patterns
    if (
        emailAddress.includes("..") ||
        emailAddress.includes(".@") ||
        emailAddress.includes("@.") ||
        emailAddress.startsWith(".") ||
        emailAddress.endsWith(".")
    ) {
        return false;
    }

    const parts = emailAddress.split("@");
    if (parts.length === 2 && parts[1].includes("..")) {
        return false;
    }

    return true;
}

export function validatePhoneNumber(phoneNumber) {
    let pattern = /^\+?[\d\(\)\-\s]+$/gm;
    let digitsOnly = phoneNumber.replace(/\D/g, "");
    if (digitsOnly.length >= 5 && digitsOnly.length <= 15) {
        return pattern.test(phoneNumber);
    }
    return false;
}
