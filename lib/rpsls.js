export function rps(shot){
    const moves = ['rock', 'paper', 'scissors'];
    if (shot == undefined){
        return {'player': moves[Math.floor(Math.random() * moves.length)]};
    }
    else{
        shot = shot.toLowerCase();

        if(!moves.includes(shot)){
            return 'error';
        }
        
        let opponent = moves[Math.floor(Math.random() * moves.length)];

        if(shot === opponent){
            return {'player': shot, 'opponent': opponent, 'result': 'tie'};
        }
      
        if (shot === 'rock' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
  
        if (shot === 'rock' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
     
         if (shot === 'paper' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
  
        if (shot === 'paper' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'scissors' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
        if (shot === 'scissors' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }  
    } 
}
export function rpsls(shot){
    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    
        if (shot === undefined) {
            return {'player': moves[Math.floor(Math.random() * moves.length)]};
        } else {
            //standardize answer
            shot = shot.toLowerCase();
    
             //Validity of shot
             if (!moves.includes(shot)) {
                return 'error';
            }
       
            let opponent = moves[Math.floor(Math.random() * moves.length)];
    

            if (shot === opponent) {
                return {'player': shot, 'opponent': opponent, 'result': 'tie'};
            }

            if (shot === 'rock' && (opponent === 'scissors' || opponent === 'lizard')) {
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
 
            if (shot === 'rock' && (opponent === 'paper' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }

            if (shot === 'paper' && (opponent === 'rock' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
     
            if (shot === 'paper' && (opponent === 'scissors' || opponent === 'lizard')) {
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }

            if (shot === 'scissors' && (opponent === 'rock' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }

            if (shot === 'scissors' && (opponent === 'paper' || opponent === 'lizard')) {
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
         
            if (shot === 'lizard' & (opponent === 'paper' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
      
            if (shot === 'lizard' & (opponent == 'rock' || opponent == 'scissors')) {
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }

            if (shot === 'spock' & (opponent === 'paper' || opponent === 'lizard')) {
                return {'player': 'Spock', 'opponent': opponent, 'result': 'lose'};
            }

            if (shot === 'spock' & (opponent === 'rock' || opponent === 'scissors')) {
                return {'player': 'Spock', 'opponent': opponent, 'result': 'win'};
            }        
    }
 }