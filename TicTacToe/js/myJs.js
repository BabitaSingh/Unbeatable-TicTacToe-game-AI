
var ai_turn;
var user_turn;
var choose_counts=-1;
function human(){
	choose_counts++;
	if(choose_counts>0)
	{
		if(confirm("Would you like to start over?")){
			//wipe out board
			user_turn=1;
			ai_turn=0;
			choose_counts=-1;
		}else
			alert("Game has been resumed, please play your turn");		
	}else{
		user_turn=1;
		ai_turn=0;
	}	
}
function machine(){
	var block=document.getElementById("block5");
		if(!block.classList.contains("fa-circle") && !block.classList.contains("fa-times"))
			block.className+=" fa-square";
	/*choose_counts++;
	if(choose_counts>0)
	{
		if(confirm("Would you like to start over?")){
			//wipe out board
			user_turn=0;
			ai_turn=1;
			choose_counts=-1;
		}else
			alert("Game has been resumed, please play your turn");		
	}else{
		user_turn=0;
		ai_turn=1;
		play(ai_turn, user_turn);
	}	
	*/
}
function play(Mturn, Uturn){
	if(Mturn==1)
	{
		var block=document.getElementById("block5");
		if(block)
		block.className+="fa-circle";
	}
}

function mouseHover(){
	
}