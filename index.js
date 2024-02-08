// filename index.js
// package name postoffice

const GENERIC_DOMAINS = "('samplemail.com','samplemail.co.uk','examplemailbox.com'";

function getDomain(email) {
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

module.exports = { getDomain }