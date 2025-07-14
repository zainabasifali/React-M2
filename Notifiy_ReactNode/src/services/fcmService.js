const admin = require("firebase-admin");
const { google } = require("googleapis");
const path = require("path");

// Initialize Firebase Admin SDK
const firebaseConfig = path.join(__dirname, "../../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

// Function to send a notification to a device
async function sendNotification(token, title, body) {
  const message = {
    notification: {
      title,
      body,
    },
    android: {
      priority: "high",
    },
    apns: {
      payload: {
        aps: {
          alert: { title, body },
          sound: "default",
          contentAvailable: true,
        },
      },
    },
    token,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Notification sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error;
  }
}

module.exports = {
  sendNotification,
  getAccessToken,
};
