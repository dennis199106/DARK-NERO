const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'GENUX-049413',
    PREFIX: process.env.PREFIX || '.',
    OWNER_NUMBER: process.env.OWNER_NUMBER || ['2348139239376'],
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://kakomo7064:F81fvkXvC4xFHmbP@cluster0.rfwkuda.mongodb.net/',
};
