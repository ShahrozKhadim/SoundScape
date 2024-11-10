import {store} from '../Store/store';
/*
/!**
 * Formats a given credit card number into groups of four digits.
 * @param {string} text - The raw credit card number.
 * @returns {string} - The formatted credit card number.
 *!/
export function formatCardNumber(text) {
  // Remove non-digit characters
  let formatText = text.replace(/\D/g, '');

  // Get the length of the numeric string
  let length = formatText?.length;

  // Format based on length (12 to 16 digits)
  if (length > 12 && length <= 16) {
    formatText = `${formatText.slice(0, 4)} ${formatText.slice(
      4,
      8,
    )} ${formatText.slice(8, 12)} ${formatText.slice(12)}`;
  } else if (length > 8 && length <= 12) {
    formatText = `${formatText.slice(0, 4)} ${formatText.slice(
      4,
      8,
    )} ${formatText.slice(8)}`;
  } else if (length > 4 && length <= 8) {
    formatText = `${formatText.slice(0, 4)} ${formatText.slice(4)}`;
  }
  return formatText;
}*/

/**
 * Formats a given credit card number into groups of four digits.
 * @param {string} text - The raw credit card number.
 * @returns {string} - The formatted credit card number.
 */
export function formatCardNumber(text) {
  // Remove non-digit characters
  let formatText = text.replace(/\D/g, '');

  // Get the length of the numeric string
  const length = formatText.length;

  // Format based on length (12 to 16 digits)
  if (length > 12 && length <= 16) {
    formatText = `${formatText.slice(0, 4)} ${formatText.slice(
      4,
      8,
    )} ${formatText.slice(8, 12)} ${formatText.slice(12)}`;
  } else if (length > 8 && length <= 12) {
    formatText = `${formatText.slice(0, 4)} ${formatText.slice(
      4,
      8,
    )} ${formatText.slice(8)}`;
  } else if (length > 4 && length <= 8) {
    formatText = `${formatText.slice(0, 4)} ${formatText.slice(4)}`;
  }

  return formatText;
}

/**
 *
 * @param text
 * @returns {string}
 */
export function format_Card_Number(text = '') {
  // Remove non-digit characters
  const cleanedText = text.replace(/\D/g, '');

  // Return early if input is empty
  if (!cleanedText) {
    return '';
  }

  // Group the digits into chunks of 4
  const groups = [];
  for (let i = 0; i < cleanedText.length; i += 4) {
    groups.push(cleanedText.slice(i, i + 4));
  }

  // Join groups with a space and limit to a maximum of 16 digits
  return groups.join(' ').slice(0, 19);
}

/**
 * Formats a given expiry date (MMYY or MM/YYYY) into MM/YY format.
 * @param {string} date - The expiry date as a string.
 * @returns {string} - The formatted expiry date or a default message.
 */
export function formatExpiry(date = '') {
  // Check if the input is empty or only contains spaces
  if (!date || date.trim() === '') {
    return 'Please enter date';
  }

  // Remove any non-digit characters from the input
  let formatDate = date.replace(/\D/g, '');

  // Check if the length of the formatDate is less than or equal to 2 (month part)
  let key = formatDate.length <= 2 ? 'month' : 'year';
  let month = formatDate.slice(0, 2); // Extract the month part
  let year = formatDate.slice(2); // Extract the year part (if any)

  // If the year is part of the input (more than 2 digits), format it
  if (formatDate.length > 2) {
    // Make sure the year is only the last two digits for proper MM/YY format
    year = year.length > 2 ? year.slice(0, 2) : year;
    formatDate = `${month}/${year}`;
  }

  return formatDate;
}

/*
export function formatExpiry(date = '') {
  if (!isNotEmpty(date)) {
    return 'Please enter date';
  }
  let formatDate = date.replace(/\D/g, '');

  let key = date.length <= 2 ? 'month' : 'year';
  let month = date.slice(0, 2);
  let year = (key === 'year' && date.slice(2)) || '';
  if (formatDate.length > 2) {
    month = formatDate.slice(0, 2);
    year = formatDate.slice(2);
    formatDate = `${month}/${year}`;
  }
  return formatDate;
}
*/

/**
 * Checks if a value is not empty. Considers null, undefined, empty string, and false values as empty.
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, otherwise false.
 */
export function isNotEmpty(value) {
  // Checks for null, undefined, empty string, and other falsy values
  return (
    value !== null &&
    value !== undefined &&
    value !== '' &&
    value !== false &&
    !Number.isNaN(value)
  );
}

/*export const sorterList = {
  Popularity: (a, b) => b?.rating - a?.rating,
  Newest: (a, b) => a?.publicationDate - b?.publicationDate,
  Oldest: (a, b) => b?.publicationDate - a?.publicationDate,
  'High Price': (a, b) => b?.price - a?.price,
  'Low Price': (a, b) => a?.price - b?.price,
  Review: (a, b) => b?.review - a?.review,
};*/

export const sorterList = {
  Popularity: (a, b) => {
    const ratingA = a?.rating || 0; // Default to 0 if rating is missing
    const ratingB = b?.rating || 0; // Default to 0 if rating is missing
    return ratingB - ratingA;
  },

  Newest: (a, b) => {
    const dateA = new Date(a?.publicationDate || 0); // Default to 0 if publicationDate is missing
    const dateB = new Date(b?.publicationDate || 0); // Default to 0 if publicationDate is missing
    return dateB - dateA;
  },

  Oldest: (a, b) => {
    const dateA = new Date(a?.publicationDate || 0); // Default to 0 if publicationDate is missing
    const dateB = new Date(b?.publicationDate || 0); // Default to 0 if publicationDate is missing
    return dateA - dateB;
  },

  'High Price': (a, b) => {
    const priceA = a?.price || 0; // Default to 0 if price is missing
    const priceB = b?.price || 0; // Default to 0 if price is missing
    return priceB - priceA;
  },

  'Low Price': (a, b) => {
    const priceA = a?.price || 0; // Default to 0 if price is missing
    const priceB = b?.price || 0; // Default to 0 if price is missing
    return priceA - priceB;
  },

  Review: (a, b) => {
    const reviewA = a?.review || 0; // Default to 0 if review is missing
    const reviewB = b?.review || 0; // Default to 0 if review is missing
    return reviewB - reviewA;
  },
};

/*
export const getUpdatedItem = (id, quantityChange) => {
  const {cartItems, idToCartItems} = store.getState().cartItems;
  const index = cartItems.findIndex(item => item.id === id);
  const id_ = idToCartItems[index];
  const updatedItem = {
    id: id,
    product_quantity: cartItems[index].product_quantity + quantityChange,
    added_at: cartItems[index].added_at,
  };
  return {updatedItem, id_};
};
*/

export const getUpdatedItem = (id, quantityChange) => {
  const {cartItems, idToCartItems} = store.getState().cartItems;

  // Find the index of the item
  const index = cartItems.findIndex(item => item.id === id);

  if (index === -1) {
    // Return an error or empty object if item is not found
    console.error(`Item with id ${id} not found in cart.`);
    return {updatedItem: null, id_: null}; // or handle this differently
  }

  // Check for a valid quantity change
  if (typeof quantityChange !== 'number' || isNaN(quantityChange)) {
    console.error('Invalid quantity change');
    return {updatedItem: null, id_: null}; // or handle this differently
  }

  const id_ = idToCartItems[index];

  const updatedItem = {
    id: id,
    product_quantity: cartItems[index].product_quantity + quantityChange,
    added_at: cartItems[index].added_at,
  };

  // Ensure quantity doesn't go below zero
  updatedItem.product_quantity = Math.max(updatedItem.product_quantity, 0);

  return {updatedItem, id_};
};
