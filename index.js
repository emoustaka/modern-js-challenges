// 1. Τα δεδομένα μας (Array of Objects)
const hotelRooms = [
    { id: 1, name: "Standard Room", price: 80, isAvailable: true },
    { id: 2, name: "Superior Suite", price: 150, isAvailable: false },
    { id: 3, name: "Deluxe Villa", price: 300, isAvailable: true },
    { id: 4, name: "Executive Room", price: 120, isAvailable: true }
];

// 2. Η ΔΙΚΗ ΣΟΥ ΑΠΟΣΤΟΛΗ:
// Πρέπει να γράψεις μια Arrow Function που χρησιμοποιεί τη μέθοδο .filter() της ES6.
// Η συνάρτηση πρέπει να επιστρέφει ΜΟΝΟ τα δωμάτια που είναι διαθέσιμα (isAvailable: true) 
// ΚΑΙ έχουν τιμή μικρότερη ή ίση με 150 ευρώ.

const filterAvailableRooms = (rooms) => {
    // ΓΡAΨΕ ΤΟΝ ΚΩΔΙΚA ΣΟΥ ΕΔΩ
};

// 3. Έλεγχος αποτελέσματος
const availableBudgetRooms = filterAvailableRooms(hotelRooms);
console.log("Αποτελέσματα Φιλτραρίσματος:", availableBudgetRooms);
