
/**
 * Validates whether the given URL is valid.
 *
 * @param {string} url - The URL to be validated.
 * @returns {boolean} - True if the URL is valid, false otherwise.
 */
function validateURL(url) {
  var regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
  return regexURL.test(url);
}


/**
 * Copies the specified text to the clipboard.
 * @param {string} text - The text to be copied.
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(function() {
      message('Enlace copiado al portapapeles', "success");
    })
    .catch(function() {
      message('No se pudo copiar el enlace', "error");
    });
}

/**
 * The function `number` takes a string as input, removes all non-numeric characters except for
 * periods, and returns the parsed floating-point number.
 * @param amount - The `amount` parameter is a string representing a numerical value, possibly with
 * special characters or other non-numeric characters mixed in. The `number` function takes this
 * `amount` as input and returns a parsed floating-point number after removing any non-numeric
 * characters from the input string.
 * @returns The function `number` takes an `amount` as input and returns a parsed floating-point number
 * after removing any non-numeric characters (except for the decimal point).
 */
function number(amount) {
    var num = parseFloat(amount.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 0 : num;
}

/**
 * The `money` function formats a given amount into a currency string with two decimal places.
 * @param amount - The `amount` parameter is the numerical value that you want to format as a currency
 * string.
 * @returns The `money` function takes an `amount` as a parameter and returns the `amount` formatted as
 * a string with two decimal places using the `toLocaleString` method.
 */
function money(amount) {
    return amount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}