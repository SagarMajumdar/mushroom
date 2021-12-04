import { useState } from 'react';
import Main from './Main';
import mushroomContext from './store/mushroomcontext';
function App() {
  const [selBody, setSelbody] = useState('');
  const [selSubject,setSelsubject ] = useState('');
  return (
    <>  
      <mushroomContext.Provider value={ {
            selBody,
            onsetSelbody: setSelbody,
            selSubject,
            onsetSelsubject: setSelsubject
            }}>
        <Main> </Main>
            
      </mushroomContext.Provider>
    </>
  );
}

export default App;
