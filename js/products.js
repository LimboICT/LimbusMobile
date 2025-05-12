import { db } from './firebase.js';

export async function getProducts() {
  const snapshot = await db.collection('products').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getProductById(id) {
  const doc = await db.collection('products').doc(id).get();
  return { id: doc.id, ...doc.data() };
}
