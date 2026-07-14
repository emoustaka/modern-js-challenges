// 1. Προσομοίωση εξωτερικού Server (Επιστρέφει δεδομένα μετά από 2 δευτερόλεπτα)
const fetchRoomsFromServer = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Eco Double Room", price: 75 },
                { id: 2, name: "Luxury Suite", price: 220 }
            ]);
        }, 2000); // 2000 χιλιοστά του δευτερολέπτου = 2 δευτερόλεπτα
    });
};

// 🎯 Η ΔΙΚΗ ΣΟΥ ΑΠΟΣΤΟΛΗ:
// Μεταέτρεψε αυτή τη συνάρτηση σε ασύγχρονη (async) και χρησιμοποίησε το await
// για να πάρεις τα δεδομένα από τη fetchRoomsFromServer().
const displayHotelData =  () => {
    console.log("📍 Παρακαλώ περιμένετε, γίνεται φόρτωση των δωματίων...");

    // ΓΡAΨΕ ΤΟΝ ΚΩΔΙΚA ΣΟΥ ΕΔΩ:
    // Πρέπει να καλέσεις τη fetchRoomsFromServer() χρησιμοποιώντας τη λέξη-κλειδί await
    // και να αποθηκεύσεις το αποτέλεσμα σε μια μεταβλητή (π.χ. const rooms)
    const rooms = await fetchRoomsFromServer();

    console.log("✅ Τα δεδομένα φορτώθηκαν επιτυχώς!");
    console.log("Δωμάτια από το API:", rooms);
};

displayHotelData();
