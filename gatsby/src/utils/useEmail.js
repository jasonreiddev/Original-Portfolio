import {useState} from 'react';

export default function useEmail({values}) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const body = {
      subject: values.subject,
      title: values.title,
      body: values.body,
      name: values.name,
      email: values.email,
      senderEmail: values.senderEmail,
      buzzyFuzzyFriend: values.buzzyFuzzyFriend,
    };

    const res = await fetch(
        `${process.env.GATSBY_SERVERLESS_BASE}/sendEmail`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
    );
    const text = JSON.parse(await res.text());

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      // it worked!
      setLoading(false);
      setMessage('Email sent successfully!');
    }
  }

  return {
    error,
    loading,
    message,
    sendEmail,
  };
}
