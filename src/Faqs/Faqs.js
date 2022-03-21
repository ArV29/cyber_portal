import React from "react";
import FaqCard from "./FaqCard";
import "./Faqs.css"

const faqs = [
  {
    question: "Should I share my OTP with anyone?",
    answer: "No, OTP should never be shared",
  },
  {
    question: "What is malware?",
    answer:
      "Malware, short for malicious software, is a program or file that is intentionally harmful to your computer, network, or website. ",
  },
  {
    question: "What is anti-virus software?",
    answer:
      "Anti-virus software, a.k.a anti-malware software, is computer software used to scan files to identify and eliminate malicious software (malware).",
  },
  {
    question: "What is Two-Factor Authentication?",
    answer:
      "Two-factor authentication requires a second security measure to confirm your identity.",
  },
  {
    question: "What is cyber attack?",
    answer: "An offensive action by a malicious actor that is intended to undermine the functions of networked computers and their related resources, including unauthorized access, unapproved changes, and malicious destruction. Examples of cyber attacks include Distributed Denial of Service (DDoS) and Man-in-the-Middle (MITM) attacks."
  },
  {
    question: "What is encryption?",
    answer: "Encryption is the process of encoding messages or other information, referred to as plaintext, into ciphertext, in a manner in which only the encoder or other authorized parties can convert the ciphertext back to plaintext.",
  },

];

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="titleText">
        <div className="titleFaq">
          Frequently Asked Questions
        </div>
        <div className="verticalDivider"></div>
      </div>
      <div className="cards">
        {faqs.map((faq, index) => (
          <div key={index} className="card">
            <FaqCard faq={faq} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
