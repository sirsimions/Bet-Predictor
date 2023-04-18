import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Home({ user }) {
    console.log(user)

    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=600'})`
        }
    };


    if (user) {

        return (
            <>
            <div className='bgimage' style={styles.paperContainer}></div>

            <div className='bod'>
                Hi {user.firstname}, tired with guesswork when predicting games, try this app.You might just be the next jackpot winner. 
            </div>
            </>
        )
    } 
    else {
        return(
            <p className='not'>Betting made easy. You are just a few clicks away from your win. Sign up or login in if you alread have an account</p>
            )
    }
}
export default Home;