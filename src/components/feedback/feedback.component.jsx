import * as React from 'react';
import { Rating, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import './feedback.style.css';


export default function Feedback() {

    const [name, setName] = React.useState(false);
    const [number, setNumber] = React.useState(false);
    const [feedback, setFeedback] = React.useState(false);

    const submitStyle = {
        backgroundColor: "#202020",
        color: "#757575"
    }

    let submitbutton;
    if (name && number && feedback) {
        submitbutton = <button className='manikbutton' onClick={() => {
            alert("Thank You for your feedback");
        }}>Submit</button>
    } else {
        submitbutton = <button className='manikbutton' disabled style={submitStyle}>Submit</button>
    }

    return (
        <div className='form'>
            <h1>Your feedback matters the most...!!!</h1>
            <form>
                <div className='inputs'>
                    <TextField id="outlined-basic" className='name' label="Your Name" variant="outlined" required onChange={(e) => {
                        if (e.target.value != "") {
                            setName(true);
                        }
                    }} /><br />

                    <TextField id="outlined-basic" className='name' label="Mobile Number" variant="outlined" required onChange={(e) => {
                        if (e.target.value != "") {
                            setNumber(true);
                        }
                    }} /><br />

                    <TextField
                        id="outlined-multiline-static"
                        label="Your Feedback..!"
                        multiline
                        rows={4}
                        required
                        onChange={(e) => {
                            if (e.target.value != "") {
                                setFeedback(true);
                            }
                        }}
                    // defaultValue="Your Feedback..!!"
                    /><br />

                    <Typography component="legend">Rating : </Typography>
                    <Rating name="size-large" defaultValue={2} size="large" /><br />

                    {submitbutton}
                </div>
            </form>
        </div>
    )
}