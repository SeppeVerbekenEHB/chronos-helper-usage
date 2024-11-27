const { 
    formatDate, 
    addDays, 
    isWeekend, 
    toReadableString, 
    convertTimeZone, 
    timeAgo, 
    timeUntil, 
    getRecurringDates, 
    isBusinessDay, 
    getNextBusinessDay, 
    calculateBusinessDays 
} = require('chronos-helper');

const date = new Date('2024-11-23');

// Format a date
console.log(formatDate(date, 'DD/MM/YYYY')); // "19/11/2024"

// Add days to a date
console.log(formatDate(addDays(date, 5), 'YYYY-MM-DD')); // "2024-11-24"

// Check if a date is a weekend
console.log(isWeekend(date)); // false

// Convert a date to a readable string
console.log(toReadableString(date)); // "19 November 2024"

// Convert time zones
const utcDate = new Date('2024-11-19T12:00:00Z');
console.log(convertTimeZone(utcDate, 'UTC', 'Europe/Brussels')); // Adjusted to Belgium time

// Check how long ago a date occurred
console.log(timeAgo(new Date('2024-11-24'))); // "... days ago"

// Check how far a date is in the future
console.log(timeUntil(new Date('2024-11-29'))); // "... days from now"

// Generate recurring dates
console.log(getRecurringDates(new Date('2024-11-01'), 'weekly', 3)); // Weekly dates for 3 occurrences

// Check if a date is a business day
console.log(isBusinessDay(date)); // true

// Get the next business day
console.log(getNextBusinessDay(new Date('2024-11-23'))); // "2024-11-25" (Monday)

// Calculate business days between two dates
console.log(calculateBusinessDays(new Date('2024-11-01'), new Date('2024-11-10'))); // 6 business days