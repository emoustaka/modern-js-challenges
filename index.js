// 1. Προσομοίωση Server που ΑΠΟΤΥΓΧAΝΕΙ (Πετάει σφάλμα μετά από 1.5 δευτερόλεπτο)
const fetchRoomsFromServerWithError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Network Error: Failed to connect to Hotel Database."));
        }, 1500);
    });
};

// 🎯 Η ΔΙΚΗ ΣΟΥ ΑΠΟΣΤΟΛΗ:
// Βάλε όλο τον κώδικα μέσα στο displayHotelData σε ένα try {} catch (error) {} μπλοκ.
const displayHotelData = async () => {
    console.log("📍 Γίνεται σύνδεση με τον server του ξενοδοχείου...");

    // 1. Ξεκίνα το try { εδώ
    try {
        const rooms = await fetchRoomsFromServerWithError();
        console.log("Δωμάτια:", rooms);
    } catch (error) {
    // 2. Κλείσε το try και βάλε το catch (error) { εδώ
    // 3. Μέσα στο catch, τύπωσε ένα δικό σου μήνυμα, π.χ.:
       console.log("❌ Κάτι πήγε στραβά με την εφαρμογή:", error.message);
    }
};

displayHotelData();
