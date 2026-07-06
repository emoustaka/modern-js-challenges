// 1. Τα αρχικά δεδομένα σε Ευρώ (€)
const roomsInEuro = [
    { id: 1, name: "Standard Room", priceEUR: 80 },
    { id: 2, name: "Superior Suite", priceEUR: 150 },
    { id: 3, name: "Deluxe Villa", priceEUR: 300 }
];

// Υποθέτουμε ότι η ισοτιμία είναι: 1 Ευρώ = 1.10 Δολάρια
const EXCHANGE_RATE = 1.10;

// 2. Η ΔΙΚΗ ΣΟΥ ΑΠΟΣΤΟΛΗ:
// Γράψε μια Arrow Function που χρησιμοποιεί τη μέθοδο .map().
// Πρέπει να επιστρέφει έναν ΝΕΟ πίνακα από objects, όπου κάθε object θα έχει:
// α) Το ίδιο name
// β) Την αρχική τιμή priceEUR
// γ) Μια ΝΕA ιδιότητα priceUSD (το priceEUR πολλαπλασιασμένο με το EXCHANGE_RATE)

const convertPricesToUSD = (roomsArray) => {
    return roomsArray.map(room => ({
        ...room,
        priceUSD: room.priceEUR * EXCHANGE_RATE
    }));
};

// 3. Έλεγχος αποτελέσματος στο Terminal
const roomsWithUSD = convertPricesToUSD(roomsInEuro);
console.log("Δωμάτια με Δολάρια:", roomsWithUSD);
