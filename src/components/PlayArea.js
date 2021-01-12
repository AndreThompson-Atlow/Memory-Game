import React, { useContext,} from 'react'
import MemoryButton from '../components/MemoryButton'
import {GlobalContext} from '../components/GlobalContext';

function PlayArea({seed}) {
    // First time function is mounted, it should shuffle the order. After that it should only update the order. Right now it re-creates the entire list every single time..

        

    const [globals, setGlobals] = useContext(GlobalContext);
    //Need to change index+1 === globals.activeGirls[0] || index+1 === globals.activeGirls[1] to check all elements not just 0 and 1
    const memoryButtons = globals.allGirls.map((girl, index)=> {
        if(globals.activeGirls.includes(index+1)){
            return <MemoryButton num={girl} size="200" id={index+1} key={index+1} active={true}/>
        } else {
            return <MemoryButton num={girl} size="200" id={index+1} key={index+1} active={false}/>
        }
    })
    const memoryButtons2 = globals.allGirls.map((girl, index)=> {
        if(globals.activeGirls.includes(index+17)){
            return <MemoryButton num={girl} size="200" id={index+17} key={index+17} active={true}/>
        } else {
            return <MemoryButton num={girl} size="200" id={index+17} key={index+17} active={false}/>
        }
    })

    const memoryButtonsCombined = [...memoryButtons,...memoryButtons2];
    var SeededShuffle = require('seededshuffle');
    const memoryButtonsFinal = SeededShuffle.shuffle(memoryButtonsCombined,seed); // Returns an array or null.
     

    return (
        <div className="playarea">
            {/* {true && memoryButtons}
            {true && memoryButtons2} */}
            {true && memoryButtonsFinal}
            
            <div className="information">
                <p>Score: {globals.score}</p>
                {/* <p>Active: {globals.active}</p>
                <p>Active Girls: {globals.activeGirls}</p> */}
            </div>
        </div>
        
    )
}

export default PlayArea
