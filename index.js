// Δεδομένα ενός High-End Ξενοδοχείου
const hotelInfo = {
    hotelName: "Grand Plaza Athens",
    stars: 5,
    location: "Syntagma, Greece",
    marketingStats: {
        totalReviews: 1240,
        averageRating: 4.8
    }
};

// 🎯 Η ΔΙΚΗ ΣΟΥ ΑΠΟΣΤΟΛΗ ΓΙΑ ΤΟ TASK 2:
// Αντικατάστησε τις legacy αναθέσεις με ΕΝΑ Destructuring.
// Πρέπει να πάρεις τα: hotelName, stars, location από το hotel.
const logHotelMarketingData = (hotel) => {
    
    const { hotelName, stars, location, marketingStats: { averageRating } } = hotel;

    // -----------------------------------------------------------------

    // Αν το κάνεις σωστά, τα παρακάτω console.log θα δουλέψουν ακριβώς όπως πριν!
    console.log(`Hotel: ${hotelName} (${stars} Stars)`);
    console.log(`Location: ${location}`);
    console.log(`Rating: ${averageRating} / 5`);
};

logHotelMarketingData(hotelInfo);
