import './App.css';
import ChatGPT from "./components/ChatGPT";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { OpenAIApi } from 'openai';

const App= () => {
  const commands = [
{
command : 'reset',
callback:({resetTranscript}) => resetTranscript()
},
{
  command: 'stop',
  callback: () => SpeechRecognition.stopListening(),
},
{
  command:'start',
  callback:() => SpeechRecognition.startListening(),
},
{
  command : 'open *',
    callback: (site) => {
      const sanitizedSite = site.toLowerCase().replace(/\s+/g, ''); // Convert to lowercase and remove spaces
      switch (sanitizedSite) {
        case 'google':
          window.open('http://www.google.com'); 
          break;
        case 'youtube':
          window.open('http://www.youtube.com');
          break;
        case 'facebook':
          window.open('http://www.facebook.com');
          break;
        case 'chatgpt':
          window.open('https://www.chatgpt.com');
          break;
        case 'instagram':
            window.open('https://www.instagram.com');
            break;
        case 'whatsapp':
            window.open('https://web.whatsapp.com');
            break;
        default:
          console.log('Unsupported site:', sanitizedSite);
          break;
      }
    },
},
  ];
  const { transcript, resetTranscript} = useSpeechRecognition({commands});

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className='div-element' >
        <header className='head'>
        <h1 className="title text-center text-darkGreen"> HarryPotter AI </h1>
        {/* <p>H A R R Y P O T T E R </p> */}
        </header>
          <div className='listen'>
              <button className='button' onClick={() => SpeechRecognition.startListening({continuous: true})}>Start</button>
              <button className='button' onClick={() => SpeechRecognition.stopListening()}>Stop</button>
              <button className='button' onClick={resetTranscript}>Reset</button>
           
              <div className='transcript-box'>
              <p className='text'>{transcript}</p>
              </div>
            <div className="App">
            <ChatGPT/>
            </div>
          </div>
    </div>
  );
};
export default App;
