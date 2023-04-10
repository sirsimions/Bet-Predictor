import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Chance() {

    const [win1, setWin1] = useState();
    const [win2, setWin2] = useState();
    const [team1, setTeam1] = useState();
    const [team2, setTeam2] = useState();
    const [matches, setMatches] = useState();

    const [sum1, setSum1] = useState();
    const [sum2, setSum2] = useState();
    const [winner, setWinner] = useState();
    const [statement, setStatement] = useState('');
    const Navigate = useNavigate()

    
    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=600'})`
        }
    };


    function predict(comment) {


        setSum1(parseInt(win1)*0.2)
        console.log(win1)
        console.log(win2)
        setSum2(parseInt(win2)*0.2)
    

        if (win1 < win2) {
            comment = `Prediction: ${team2} will win`
        }
        else if(win1 > win2) { 
            comment = `Prediction: ${team1} will win`
        }
        else if(win1===win2){
            comment = `The teams will draw`
        }
        else {comment ="Enter valid values"}

        setStatement(comment)
        setMatches(`${team1} and ${team2} Predictions`)
    }


    return (
        <>
        <div className='bgimage' style={styles.paperContainer}></div>
            <div className='bod'>
                <div>Fill in the boxes below with the required information</div>
                <div>Enter the first team<input type='text' value={team1} onChange={(e) => setTeam1(e.target.value)} /></div>
                <div>Enter the number of wins for the recent five matches<input type='number' value={win1} onChange={(e) => setWin1(e.target.value)} /></div>
                <div>Enter the second team<input type='text' value={team2} onChange={(e) => setTeam2(e.target.value)} /></div>
                <div>Enter the number of wins for the recent five matches<input type='number' value={win2} onChange={(e) => setWin2(e.target.value)} /></div>
                
                <div><button onClick={predict}>Predict</button></div>
                {/* <div>Sum: {sum}</div> */}
                <div>{matches}</div>
                <div> {statement} </div>
            </div>
        </>
    )
}
export default Chance;