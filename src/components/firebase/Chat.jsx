import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from './index';
import SendMessage from './SendMessage';
import SignIn from './signIn';
import SignOut from './SignOut';

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <SignIn />
      <div className="msgs flex justify-center items-center flex-col">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? 'sent' : 'received'
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll} />
    </div>
  );
}

export default Chat;
