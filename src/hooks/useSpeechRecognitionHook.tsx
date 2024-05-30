import { useEffect, useState } from "react";

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}
const useSpeechRecognitionHook = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  useEffect(() => {
    if (!recognition) {
      return;
    }
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      console.log("Onresult event: ", e.results[0][0].transcript);
      recognition.stop();
      setIsListening(false);
    };
  }, []);
  const startListening = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };
  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };
  return {
    text,
    isListening,
    startListening,
    hasRecognitionSupport: !!recognition,
    stopListening,
  };
};
export default useSpeechRecognitionHook;
