import React, { useEffect, useState } from "react";
type supportStatusType = "SUPPORTED" | "NOT_SUPPORTED";
type listeningStatusType = "LISTENING" | "NOT_LISTENING";
const useMySpeechRecognitionHook = () => {
  const [supportStatus, setSupportStatus] = useState(
    "NOT_SUPPORTED" as supportStatusType
  );
  const [mySpeechRecognition, setMySpeechRecognition] = useState(
    null as null | SpeechRecognition
  );
  const [listeningStatus, setListeningStatus] = useState(
    "NOT_LISTENING" as listeningStatusType
  );
  const [spokenText, setSpokenText] = useState("");
  const myFunctions = {
    setupSpeechRecognition: () => {
      if ("webkitSpeechRecognition" in window) {
        const recognition_ = new webkitSpeechRecognition();
        recognition_.onresult = (e: SpeechRecognitionEvent) => {
          const spokenText_ = e.results[0][0].transcript;
          setSpokenText(spokenText_);
          setListeningStatus("NOT_LISTENING");
        };
        setSupportStatus("SUPPORTED");
        setMySpeechRecognition(recognition_);
      } else {
        setSupportStatus("NOT_SUPPORTED");
      }
    },
    startListening: () => {
      if (listeningStatus === "LISTENING") {
        console.log("Already Listening");
        return;
      } else if (supportStatus === "NOT_SUPPORTED") {
        console.log("Browser Does Not Supports Speech Recognition.");
        return;
      }
      mySpeechRecognition?.start();
      setListeningStatus("LISTENING");
    },
    stopListening: () => {
      mySpeechRecognition?.stop();
      setListeningStatus("NOT_LISTENING");
    },
  };

  useEffect(() => {
    myFunctions.setupSpeechRecognition();
  }, []);
  return {
    startListening: myFunctions.startListening,
    stopListening: myFunctions.stopListening,
    supportStatus,
    spokenText,
    listeningStatus,
  };
};

export default useMySpeechRecognitionHook;
