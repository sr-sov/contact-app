import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Aragorn",
      email: "ranger@rohan.com",
    },
    {
      id: "2",
      name: "Boromir",
      email: "bro@rohan.com"
    }
  ]

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts = { contacts }/>
    </div>
  );
}

export default App;