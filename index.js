var icplaza = require('./src/icplaza.js')

// dont override global variable
if (typeof window !== 'undefined' && typeof window.icplaza === 'undefined') {
    window.icplaza = icplaza
}

module.exports = icplaza
