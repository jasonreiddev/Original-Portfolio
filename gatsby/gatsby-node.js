// Work around due to gatsby cloud not supporting ESM.

const requireEsm = require('esm')(module);
module.exports = requireEsm('./gatsby-node.esm.js');
