import { useState } from "react";
import { sendMessage } from "../socketApi";
import styles from "./styles.module.css";

function ChatForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </form>
    </div>
  )
}

export default ChatForm