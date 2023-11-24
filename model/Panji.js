const mongoose = require('mongoose');



const yourDataSchema = new mongoose.Schema({
    "DATE (English)": String,
    "DAY (English)": String,
    LUNAR_MONTH: String,
    SOLAR_MONTH: String,
    DAY_OF_SOLAR_MONTH: String,
    ENG_SUNRISE: String,
    ENG_SUNSET: String,
    SUNRISE: String,
    SUNRISE_LAGNA: String,
    SUNSET: String,
    SUNSET_LAGNA: String,
    PAKSHA: String,
    TITHI: String,
    THITHI_PERIOD: String,
    "TITHI_PERIOD (English)": String,
    NAKSHATRA: String,
    NKTRA_PERIOD: String,
    "NKTRA_PERIOD (English)": String,
    CHANDRA_RAASI: String,
    CHANDRA_RAASI_PERIOD: String,
    "CHANDRA_RAASI_PERIOD (English)": String,
    PUSKAR: String,
    SRADDHA: String,
    FESTIVAL_OCCASION: String,
    YOGINI: [String],
    'CHANDRA SUDDHI': Object,
    'GHATA CHANDRA': Object,
    'AUSPICIOUS TIME': [String],
    'BARRED/INAUSPICIOUS TIME': [String],
    "TARA SUDDHI": [String]
}, { timestamps: true });

const Panji = mongoose.model('jobs', yourDataSchema);

module.exports = Panji;
