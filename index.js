const hotelStatus = {
    name: "Aegean View Resort",
    isOpen: true,
    rating: 4.8
};

const getHotelSummary = (hotel) => {
    // ❌ ΠΑΛΙΟΣ ΤΡΟΠΟΣ (If/Else). Σβήσε αυτές τις 8 γραμμές και βάλε ΕΝΑΝ Ternary Operator:
    const availabilityMessage = hotel.isOpen ? "Currently Open" : "Closed for Season";

    // ----------------------------------------------------------------------------------

    // 🎯 Η ΔΙΚΗ ΣΟΥ ΑΠΟΣΤΟΛΗ:
    // Γράψε έναν δεύτερο Ternary Operator για τη βαθμολογία.
    // Αν το hotel.rating είναι μεγαλύτερο ή ίσο με 4.5, η μεταβλητή badge πρέπει να είναι "Top Rated".
    // Αλλιώς, πρέπει να είναι "Standard".
    const badge = hotel.rating >= 4.5 ? "Top Rated" : "Standard";

    console.log(`Hotel: ${hotel.name}`);
    console.log(`Status: ${availabilityMessage}`);
    console.log(`Category: ${badge}`);
};

getHotelSummary(hotelStatus);

