const hotelRooms = [
    { id: 1, name: "Standard Room", priceEUR: 80, isAvailable: true },
    { id: 2, name: "Superior Suite", priceEUR: 150, isAvailable: false },
    { id: 3, name: "Deluxe Villa", priceEUR: 300, isAvailable: true },
    { id: 4, name: "Executive Room", priceEUR: 120, isAvailable: true }
];

const EXCHANGE_RATE = 1.10;

// ΑΠΟΣΤΟΛΗ: Χρησιμοποίησε .filter().map() στη σειρά (chaining)
const getAvailableRoomsInUSD = (rooms) => {
    return rooms
        .filter(room => room.isAvailable) // Κρατάει μόνο τα διαθέσιμα
        .map(room => {
            // Επιστρέφει το object με τη νέα τιμή priceUSD
            return {
                id: room.id,
                name: room.name,
                priceEUR: room.priceEUR,
                priceUSD: room.priceEUR * EXCHANGE_RATE
            };
        });
};

const finalResult = getAvailableRoomsInUSD(hotelRooms);
console.log("Διαθέσιμα δωμάτια σε USD:", finalResult);
