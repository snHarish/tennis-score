import React, {  useState } from "react";
import {Box, Button, makeStyles, TextField, Typography} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    normalInput: {
        maxWidth: '31rem',
        width: '95%',
        margin: theme.spacing(2),
        backgroundColor:'blueGrey',
        color:'black',
       
      },
      buttonGray: {
        margin: theme.spacing(1),
        backgroundColor:'#DCDCDC',       
        color:'#000000',
        marginTop:'15px',
      },
      buttonPurple: {
        margin: theme.spacing(1),
        backgroundColor:'#800080',
        color:'#FFFFFF',
        marginTop:'15px',
      },
      buttonGreen: {
        margin: theme.spacing(1),
        backgroundColor:'#008000',       
        color:'#000000',
        marginTop:'15px',
      },
      marginTop:{
          marginTop:'25px'
      }
}));

const  ScorePage=()=>{
  const classes = useStyles();
  const [scorePlyer1,setScorePlayer1] = useState('0');
  const [scorePlyer2,setScorePlayer2] = useState('0');
  const [gamePlyer1,setGamePlayer1] = useState('0');
  const [gamePlyer2,setGamePlayer2] = useState('0');
  const [matchPlyer1,setMatchPlayer1] = useState('0');
  const [matchPlyer2,setMatchPlayer2] = useState('0');
  

 //This function calculates the match won by player count  
 const matchOwnBy=(score:any, compScore:any,player:string)=>{
        var retValue:string='';       
        
        //If Score is '40' or 'Ad' do the below calc else just increase the score to 15, 30, 40
        if (score === '40' || score === 'Ad'){
            if(compScore === '40' && score === '40')
                retValue = 'Ad'
            else if(score === 'Ad' && compScore === 'Ad'){
                if(player === 'p1')
                    setScorePlayer2('40')
                if(player === 'p2')
                    setScorePlayer1('40')
                retValue = '40';
                }
            else if(score === 'Ad' && compScore === '40'){
                if(player === 'p1')
                    setScorePlayer2('0')
                if(player === 'p2')
                    setScorePlayer1('0')
                retValue = '50'              
            }else if(compScore === 'Ad' && score === '40'){
                if(player === 'p1'){
                    setScorePlayer2('40')
                    retValue = '40'
                }
                if(player === 'p2'){
                    setScorePlayer1('40')
                    retValue = '40'
                }
            }else
                retValue = '50';    
            
        }else{
           
            var s1 = parseInt(score);
            if (s1 < 30){
                 s1 = s1 + 15
                 retValue = s1.toString()
            }
            else if ( s1 === 30)
                s1 = s1 +10
                retValue = s1.toString()
        }

    //if player1  then set  their score, game score and match score value else set player2 score.
       if(player === 'p1'){           
            if(retValue==='50'){
                var gamep1Score = parseInt(gamePlyer1);
                gamep1Score ++;
                setGamePlayer1(gamep1Score.toString());
                if(gamep1Score === 6){
                    var mv = parseInt(matchPlyer1);
                    mv ++;
                    setMatchPlayer1(mv.toString());
                    setGamePlayer1('0');
                    setScorePlayer1('0');
                    setGamePlayer2('0');
                    setScorePlayer2('0')
                }
                setScorePlayer1('0');
                setScorePlayer2('0');
            }else{
                setScorePlayer1(retValue);
            }
       }
       else{
           
            if(retValue==='50'){
                var gamep2Score = parseInt(gamePlyer2);
                gamep2Score ++;
                setGamePlayer2(gamep2Score.toString());
                setScorePlayer2('0');
                if(gamep2Score === 6){
                    var mv2 = parseInt(matchPlyer2);
                    mv2 ++;
                    setMatchPlayer2(mv2.toString());
                    setGamePlayer2('0');
                    setScorePlayer2('0');
                    setGamePlayer1('0');
                    setScorePlayer1('0');
                }
                setScorePlayer1('0');
                setScorePlayer2('0');
            }else {
                setScorePlayer2(retValue);
            }
       }
    }
    
    const clearAll=()=>{
       setScorePlayer1('0');
       setScorePlayer2('0');
       setGamePlayer1('0');
       setGamePlayer2('0');
       setMatchPlayer1('0');
       setMatchPlayer2('0');
    }

 
    return(
        <Box py={1} px={4}>
        <Typography variant="h4" color={'primary'} align={'center'}>
           Enter score for Players
        </Typography>
      
        <Box className={classes.marginTop} display="flex"  flexDirection="column" alignItems='center'>
            <Box display="flex"  flexDirection="row">
                <Box>
                    <TextField
                    size="small"
                    id="name"
                    label="Enter Player Name"
                    variant="outlined"
                    placeholder="Enter score"  
                    className={classes.normalInput}
                   />
                </Box>
                <Box>
                    <Button className={classes.buttonGreen}  color='primary'>
                        {matchPlyer1}
                    </Button>
                </Box>
                <Box>
                  
                    <Button className={classes.buttonPurple}  color='primary'>
                        {gamePlyer1}
                    </Button>
                </Box>
                
                <Box>                    
                    <Button className={classes.buttonGray} onClick={e=>matchOwnBy(scorePlyer1, scorePlyer2,'p1')} color='primary'>
                        {scorePlyer1}
                    </Button>
                </Box>
            </Box>
            <Box display="flex"  flexDirection="row">
                <Box>
                    <TextField
                    size="small"
                    id="name1"
                    label="Enter Player Name"
                    variant="outlined"
                    placeholder="Enter score"       
                
                    className={classes.normalInput}
                    />
                </Box>
                <Box>
                    <Button className={classes.buttonGreen}  color='primary'>
                        {matchPlyer2}
                    </Button>
                </Box>
                <Box>
                    <Button className={classes.buttonPurple}  color='primary'>
                        {gamePlyer2}
                    </Button>
                </Box>
                <Box>
                    <Button className={classes.buttonGray} onClick={e => matchOwnBy(scorePlyer2, scorePlyer1,'p2')} color='secondary'>
                        {scorePlyer2}
                    </Button>
                </Box>
               
            </Box>
        </Box>

        <Button onClick={clearAll} color='secondary'>
            Clear All
        </Button>
        </Box>
    )
   
}

export default ScorePage;


