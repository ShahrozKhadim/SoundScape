import auth from '@react-native-firebase/auth';
import {nanoid} from '@reduxjs/toolkit';

/**
 * Logs in a user with their email and password.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<string>} - Returns a generated token (nanoid) if the login is successful.
 * @throws {Error} - Throws an error if login fails.
 */
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return nanoid();
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

/**
 * Registers a new user with email and password.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} - Returns an object containing the email and a generated token (nanoid).
 * @throws {Error} - Throws an error if registration fails.
 */
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const body = {email, token: nanoid()};
    await auth().createUserWithEmailAndPassword(email, password);
    return body;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

/**
 * Checks if an email is already registered with Firebase Authentication.
 *
 * @param {string} email - The email address to check.
 * @returns {Promise<Array<string>>} - Returns an array of sign-in methods for the email (e.g., email/password).
 * @throws {Error} - Throws an error if the check fails.
 */
export const checkEmailInFirebaseAuth = async email => {
  try {
    return await auth().fetchSignInMethodsForEmail(email);
  } catch (error) {
    console.log('Error checking email');
    throw error;
  }
};

/**
 * Sends a password reset email to the user.
 *
 * @param {string} email - The email address to send the reset password link to.
 * @returns {Promise<void>} - Resolves if the email is sent successfully.
 * @throws {Error} - Throws an error if sending the password reset email fails.
 */
export const sendPasswordResetEmail = async email => {
  try {
    await auth().sendPasswordResetEmail(email);
  } catch (error) {
    console.log('Reset code send fail');
    throw error;
  }
};
