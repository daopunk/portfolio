import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from '../../firebaseConfig';

export const sendContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const ref = collection(firestore, 'contact');
    const { name, email, subject, message } = data;

    await addDoc(ref, {
      name,
      email,
      subject,
      message,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
