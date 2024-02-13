// filename index.js
// package name postoffice

const GENERIC_DOMAINS = "('samplemail.com','samplemail.co.uk','examplemailbox.com'";

function getDomain(email, GENERIC_DOMAINS) {
  let cleanEmail = `trim(${email})`
  const domain = `substr(${cleanEmail}, strpos(${cleanEmail}, '@') + 1)`;
  return `case
            when ${domain} in ${common.GENERIC_DOMAINS} then ${cleanEmail}
            when ${domain} = "othermailbox.com" then "other.com"
            when ${domain} = "mailbox.com" then "mailbox.global"
            when ${domain} = "support.postman.com" then "postman.com"
            else ${domain}
          end`;
}

// Utility functions for data cleansing

// Function to trim whitespace from a string
function trimWhitespace(value) {
    if (typeof value === 'string') {
        return `trim(${value})`;
    }
    return value;
};

// Function to convert a string to lowercase
function toLowerCase(value) {

    if (typeof value === 'string') {
        return `lower(${value})`;
    }
    return value;
};

// Function to convert a string to uppercase
const toUpperCase = (value) => {

    if (typeof value === 'string') {
        return `upper(${value})`;
    }
    return value;
};

module.exports = { 
    getDomain,
    trimWhitespace,
    toLowerCase,
    toUpperCase 
  }