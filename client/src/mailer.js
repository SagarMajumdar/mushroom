import React, {createContext, useContext}  from "react";
import mushroomContext from "./store/mushroomcontext";
import axios from 'axios';
import 'bulma/css/bulma.css';
import mushroom from './assets/mushroom.png';

const Mailer=()=>{
    const ctx =useContext(mushroomContext);

    const sendmail = async ()=>{
        try {
           
            // test for showing image in browser console
            (function(url) {
                var image = new Image();
              
                image.onload = function() {
                  var style = [
                    'padding: ' + image.height*0.48 +  'px ' + image.width*0.48 + 'px;',
              
                    'background: url('+ url +');'
                   ].join(' ');
              
                   // notice the space after %c
                   console.log('%c ', style);
                };
              
                // Actually loads the image
                image.src = url;
              })('http://localhost:3000/static/media/mushroom.ef808cfd.png');
              //

              const result = await axios.post('http://localhost:5000/api/mushroom/sendmail', { mailbody :ctx.selBody, mailsubject: ctx.selSubject });
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
            
        <>
            <div className="columns">
                <div className="column is-2"> </div>
                <div className="column is-3">
                    <div style={{marginTop:'10px'}} >
                        <div className="columns is-vcentered">
                           <div className="column is-5"> <img src={mushroom} alt="mushroom image"></img> </div>
                           <div className="column "> <h5 className="title is-5">mushroom </h5> <span  className="content is-small">[ test application for sending mails with nodemailer ] </span></div>
                        </div>
                       
                    </div>
                    <p  style={{marginTop:'10px'}} >
                        subject
                    </p>
                    <input  className="input is-small" type="text" value={ctx.selSubject} onChange={(e)=>{ ctx.onsetSelsubject(e.target.value)}}></input>
                    <p  style={{marginTop:'10px'}}>
                        body
                    </p>
                    <textarea  className="textarea is-small" rows="2" value={ctx.selBody} onChange={(e)=>{ ctx.onsetSelbody(e.target.value) }}></textarea>   
                    
                    <button style={{marginTop:'10px'}} className="button is-small is-warning" type="button" onClick={sendmail} >send</button> 
                    <div style={{marginTop:'40px'}} className="content is-small">
                        <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </div>
                
            </div>
           

            
        </>
    )
}

export default Mailer;