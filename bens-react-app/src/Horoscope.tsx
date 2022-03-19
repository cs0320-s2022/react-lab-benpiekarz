import React, {useState} from 'react';
import TextBox from './TextBox';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';


function Horoscope() {
    const [sunText, setSun] : [string, React.Dispatch<string>] = useState("");
    const [moonText, setMoon] : [string, React.Dispatch<string>] = useState("");
    const [risingText, setRising] : [string, React.Dispatch<string>] = useState("");
    const [suggestedTrait, setTrait] = useState([] as string[]);

    const requestHoroscope = () => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            sun: sunText,
            moon: moonText,
            rising: risingText
        };
     
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.post('http://localhost:4567/horoscope', JSON.stringify(toSend), config)
            .then(response => {
            console.log(response.data);
            //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
            //Note: It is very important that you understand how this is set up and why it works!
            setTrait(response.data['horoscope']);
        })
         .catch(error => {
         console.log(error);
        });
    }

     

  return (
    <div className="Horoscope">
      <header className="Horoscope-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Horoscopes
        </p>
      </header>
      <TextBox label={"Sun Sign"} change={setSun}/> 
      <TextBox label={"Moon Sign"} change={setMoon}/> 
      <TextBox label={"Rising Sign"} change={setRising}/> 
      <AwesomeButton onPress={requestHoroscope} type="primary">Submit</AwesomeButton>
      {suggestedTrait.map((hors : string) => <p>{hors}</p>)}
    </div>
  );
}

export default Horoscope;
