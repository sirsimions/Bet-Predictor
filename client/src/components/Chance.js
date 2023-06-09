import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import '../App.css'


function Chance( {user} ) {

    const [win1, setWin1] = useState();
    const [win2, setWin2] = useState();
    const [team1, setTeam1] = useState();
    const [team2, setTeam2] = useState();
    const [matches, setMatches] = useState();

    const [sum1, setSum1] = useState();
    const [sum2, setSum2] = useState();
    const [draw1, setDraw1] = useState(0);
    const [draw2, setDraw2] = useState(0);
    const [statement, setStatement] = useState('');
    const navigate = useNavigate()

    

    
    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=600'})`
        }
    };


    function predict(comment) {

     let score1= parseInt(win1)*3+parseInt(draw1)
     let score2= parseInt(win2)*3+parseInt(draw2)

        setSum1(score1)
        console.log(win1)
        console.log(draw1)
        console.log(win2)
        setSum2(score2)
    

        if (score1 < score2 && parseInt(win1)+parseInt(draw1) <=5 && parseInt(win2)+parseInt(draw2) <=5 && team1!=team2) {
            comment = `Prediction: ${team2} will win`
        }
        else if(score1 > score2 && parseInt(win1)+parseInt(draw1) <=5 && parseInt(win2)+parseInt(draw2) <=5 && team1!=team2) { 
            comment = `Prediction: ${team1} will win`
        }
        else if(score1===score2 && parseInt(win1)+parseInt(draw1) <=5 && parseInt(win2)+parseInt(draw2 && team1!=team2) <=5){
            comment = `The teams will draw`
        }
        else {comment ="Enter valid values. Consider only the most recent FIVE matches"}

        setStatement(comment)
        setMatches(`${team1} and ${team2} Predictions`)
    }

    if(user){
    return (
        <>
        <div className='bgimage' style={styles.paperContainer}></div>
            <div className='bod'>
                <div className='fields'>Enter the number of wins and draws for the most recent FIVE (5) matches</div>
                <div className='fields'>HOME TEAM: <input type='text' value={team1} onChange={(e) => setTeam1(e.target.value)} /></div>
                <div className='fields'>No. of Wins: <input type='number' value={win1} onChange={(e) => setWin1(e.target.value)} /></div>
                <div className='fields'>No. of Draws: <input type='number' value={draw1} onChange={(e) => setDraw1(e.target.value)} /></div>
                <div className='fields' id="line">____________________________________________________________________</div>
                <div className='fields'>AWAY TEAM: <input type='text' value={team2} onChange={(e) => setTeam2(e.target.value)} /></div>
                <div className='fields'>No. of Wins: <input type='number' value={win2} onChange={(e) => setWin2(e.target.value)} /></div>
                <div className='fields'>No. of Draws: <input type='number' value={draw2} onChange={(e) => setDraw2(e.target.value)} /></div>
                
                <div ><button className='bt' onClick={predict}>Predict</button></div>
                {/* <div>Sum: {sum}</div> */}
                {/* <div>{matches}</div> */}
                <div className='com'> {statement} </div>
            </div>
            {/* <button className='search' onClick={goal}>Goal.com</button> */}
        </>
    )
    } else {
        return(
        <p>Kindly login</p>
        )
    }
}
export default Chance;