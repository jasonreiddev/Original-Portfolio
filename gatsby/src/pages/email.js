import React from 'react';
import useForm from '../utils/useForm';
import useEmail from '../utils/useEmail';

import {Layout} from '../components/Layout/Layout';
import {FormField} from '../components/FormField/FormField';
import {Button} from '../components/Button/Button';

export default function EmailPage() {
  const {values, updateValue} = useForm({
    subject: 'From Email Page',
    title: 'Comment:',
    body: '',
    name: '',
    email: '',
    senderEmail: 'jasonreidd@gmail.com',
    buzzyFuzzyFriend: '',
  });
  const {
    error,
    loading,
    message,
    sendEmail,
  } = useEmail({
    values,
  });

  if (message) {
    return <p>{message}</p>;
  }
  return (
    <Layout title="Send Email">
      <form onSubmit={sendEmail}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <FormField
            name="name" displayName="Name" type="text"
            value={values.name} updateValue={updateValue}/><br/>
          <FormField
            name="email" displayName="Email " type="email"
            value={values.email} updateValue={updateValue}/><br/>
          <FormField id="buzzyFuzzyFriend"
            name="buzzyFuzzyFriend" type="buzzyFuzzyFriend"
            value={values.buzzyFuzzyFriend} updateValue={updateValue}/>
        </fieldset>
        <fieldset disabled={loading}>
          <legend>Comment</legend>
          <FormField
            name="body" type="textBox"
            value={values.body} updateValue={updateValue}/><br/>
        </fieldset>
        <fieldset disabled={loading}>
          <div aria-live="polite" aria-atomic="true">{error ? <p>Error: {error}</p> : ''}</div>
          <Button primary={true} type="submit" disabled={loading} label={loading ? 'Sending Email...' : 'Send Email'}>
          </Button>
        </fieldset>
      </form>
    </Layout>
  );
}
