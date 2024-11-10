/**
 * Enables the user’s presence status in the database based on their connection state.
 * When the user is online, their presence is set to "Online".
 * When the user disconnects, their presence is set to "Offline".
 *
 * @param {firebase.database.DataSnapshot} snap - The snapshot containing the value that determines the user's online status.
 * @param {firebase.database.Reference} presenceRef - The reference to the user's presence node in Firebase Realtime Database.
 */
export const enableOfflineConnection = async (snap, presenceRef) => {
  if (snap.val() === true) {
    await presenceRef.set('Online');
    await presenceRef.onDisconnect().set('Offline');
  }
};
