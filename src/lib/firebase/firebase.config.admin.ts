import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const app =
  getApps().length === 0
    ? initializeApp({
        credential: cert({
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY,
          projectId: process.env.FIREBASE_PROJECT_ID,
        }),
      })
    : getApps()[0];

export const adminAuth = getAuth(app);
