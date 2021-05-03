var callMe =function(){
    var scores, roundScores, activePlayer, gamePlaying;

    init();
    
    
    
    
    document.querySelector('.btn-roll').addEventListener('click', function() {
        if(gamePlaying)
        {  
              //1. random number
            var dice= Math.floor(Math.random()*6)+1;
            //2. display dice
            var diceDOM= document.querySelector('.dice');
            diceDOM.style.display='block';
        
            diceDOM.src='assets/images/dice-' + dice + '.png';
            
            
            if(dice!== 1)
            {
                roundScores += dice;
                document.querySelector('#current-' + activePlayer).textContent=roundScores;
            }
            else{
                nextPlayer();
                 //document.querySelector('.player-0-panel').classList.remove('active');
                //document.querySelector('.player-1-panel').classList.add('active');
            }
            
    
        }
       
       
    });
    
    //click on hold
    document.querySelector('.btn-hold').addEventListener('click', function() {
       if(gamePlaying)
       {    //1. add scores to global scores
            scores[activePlayer] += roundScores;
        
        
            document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
            var finalScore = document.querySelector('.final-score').value;
            if(scores[activePlayer] >= finalScore){
                document.querySelector('#name-'+ activePlayer).textContent='WINNER!';
                document.querySelector('.dice').style.display='none';
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                gamePlaying=false;
            }
            else{
            nextPlayer();
            }
        }
    });
    
    //click on new game
    document.querySelector('.btn-new').addEventListener('click', init);
    
    function nextPlayer(){
        document.getElementById('current-'+activePlayer).textContent='0';
    
            activePlayer===0 ? activePlayer= 1 : activePlayer= 0;
    
            roundScores=0;
            document.querySelector('.dice').style.display='none';   
    
    
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    }
    
    
    function init(){
        scores = [0,0];
        roundScores = 0;
        activePlayer = 0;
        gamePlaying=true;
    
    //document.querySelector('#current-0').textContent=dice;
        document.getElementById('score-0').textContent='0';
        document.getElementById('score-1').textContent='0';
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-0').textContent='0';
    
    //dicce image is hidden at the starting of the game.
        document.querySelector('.dice').style.display='none';
    
        document.querySelector('#name-0').textContent='player 1';
        document.querySelector('#name-1').textContent='Player 2';
    
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
    
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
    
        document.querySelector('.player-0-panel').classList.add('active');
    }    
};

