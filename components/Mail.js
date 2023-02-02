import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./mail.module.css";


export default function Sikkimemail() {
  const [subject, setSubject] = useState("");
  const [Error, setError] = useState(false);
  const [send_to, setSendto] = useState("");
  const [bcc, setBcc] = useState([]);

  const handleNum = async () => {
    if (!subject) {
      console.log("first");
    } else {
        console.log("hjsbdkjhbkjsnd")
        alert("Done");
        const res = await axios.post("/api/email/send", {
          subject,
          send_to,
          bcc,
        });
       
        return window.location.reload(true);``
        
      
    }
  };

  const changeIt = (e) => {
    const csvHeader = e.slice(0, e.length).split(",");
    setBcc(csvHeader);
  };

  return (
    <div className="heading">
      <div className="heading1">Sikkim Email Mail</div>
      <div className="form">
        <form id="survey-form">
          <div className={styles.singleInput}>
            <label className={styles.inputClass} id="name-label">
              {" "}
              subject
            </label>
            <input
              className={styles.inputCont}
              class="write-area"
              id="ActivityName"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              required
            />
          </div>
          <div className={styles.singleInput}>
            <labe className="label" id="email-label"></labe> send_to{" "}
            <input
              className={styles.inputClass}
              class="write-area"
              id="servicename"
              type="text"
              onChange={(e) => {
                setSendto(e.target.value);
              }}
              placeholder="Enter Send to"
              required
            />
          </div>
          <div className={styles.singleInput}>
            <label>bcc</label>
            <textarea
              id="textarea"
              className={styles.bigCont}
              onChange={(e) => {
                changeIt(e.target.value);
              }}
              class="write-area"
              rows="5"
              placeholder="Enter your comment here..."
            ></textarea>

          </div>

          <div className={styles.submitButton} onClick={handleNum}>
            Submit
          </div>
        </form>
      </div>
    </div>
  );
}
