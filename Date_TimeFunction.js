export function getFormattedDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let year = date.getFullYear();

    return day + '-' + month + '-' + year; // Format: DD/MM/YYYY
}

export function getTodayDate() {
    let today = new Date();
    return getFormattedDate(today);
}

export function getTomorrowDate() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Add one day to today's date
    return getFormattedDate(tomorrow);
}

export function getDayAfterTomorrowDate() {
    let dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2); // Add two days to today's date
    return getFormattedDate(dayAfterTomorrow);
}

// Function to add or subtract any number of days to/from today's date
export function getCustomDate(offsetDays) {
    let customDate = new Date();
    customDate.setDate(customDate.getDate() + offsetDays); // Add (positive number) or subtract (negative number) days
    return getFormattedDate(customDate);
}

export function getRandomTime() {

    let now = new Date();
    let minutes = now.getMinutes();
    let roundedMinutes = Math.ceil((minutes + 10) / 5) * 5;

    now.setMinutes(roundedMinutes);
    now.setSeconds(0);

    let hours = String(now.getHours()).padStart(2, '0');
    let mins = String(now.getMinutes()).padStart(2, '0');

    return `${hours}:${mins}`;
}

export function getCurrentMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonth = months[currentMonthIndex];
    return currentMonth;
}


// Usage examples:
// console.log("Today: " + getTodayDate());             // Today's date
// console.log("Tomorrow: " + getTomorrowDate());       // Tomorrow's date
// console.log("Day After Tomorrow: " + getDayAfterTomorrowDate()); // Day after tomorrow

// // Example of adding and subtracting dates
// console.log("5 days from today: " + getCustomDate(5));   // Adds 5 days to today's date
// console.log("5 days ago: " + getCustomDate(-5));         // Subtracts 5 days from today's date


