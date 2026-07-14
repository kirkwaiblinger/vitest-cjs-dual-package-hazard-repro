const objectWhoseIdentityIsImportant1 = require('package-A');
const { objectWhoseIdentityIsImportant: objectWhoseIdentityIsImportant2 } = require('package-A/other');

module.exports = {
  objectWhoseIdentityIsImportant1,
  objectWhoseIdentityIsImportant2,
}