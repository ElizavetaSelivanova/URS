/**
 * Created by Liza on 17.10.2014.
 */
 //IRA's CODE BEGIN
 var moveBase = [
		//position layout [Left Hand, Right Hand, Left Leg, Right Leg] 1 - if active
		{id: 1, name: "lHandUp", functionName: "", x:"175", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 2, name: "rHandUp", functionName: "", x:"5", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 3, name: "lLegToSide", functionName: "", x:"15", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 4, name: "rLegToSide", functionName: "", x:"165", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 5, name: "lHandToSide", functionName: "", x:"210", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 6, name: "rHandToSide", functionName: "", x:"-25", y:"85",time:"0,3", position: [0,1,0,0]}
/*		{id: 7, name: "mixer", functionName: "", x:"", y:"", time:"0,1",position: [1,1,1,1]}*/
	];
    var idBodyParts = ["._right_hand","._left_hand","._right_leg","._left_leg"];//for position identifikate
	var humanPosition = {position: [0,0,0,0]};
    var recordedBeatArray = [];
    var ifRecordBeat = 0;
	var start;
    var end;
    var danceResult=[];
$(document).ready(function(){
	$(".beat-block").click(function(){
        if (ifRecordBeat==0){
            checkBeat();
            ifRecordBeat = 1;
            $(".js-beat-start").addClass("hidden");
            $(".js-beat-finish").removeClass("hidden");
			$('.js-buttons-block, .visual-look').fadeIn()
        }else{
            $('body').off("keydown");
            ifRecordBeat = 0;
            $(".js-beat-start").removeClass("hidden");
            $(".js-beat-finish").addClass("hidden");
			$('.js-buttons-block, .visual-look').fadeOut();
        }
	});


	$('body').keydown(function(e){
		var randomColor = '#' + Math.random().toString(16).substring(2, 8);
		$('.visual-look').css('color', randomColor)
	});

    $('.button-start').on('click', function(){
        $('.dancer-wrapper, .bottom-buttons').fadeIn();
        $(".js-beat-finish, .js-beat-start").addClass("hidden");
        $('.js-buttons-block, .visual-look').hide();
        generateMovesList();
    });
});



var checkBeat = function(){
    var beatLength;
	$('body').on("keydown", function(){
        if (recordedBeatArray.length > 0 ){
            if (end!=undefined){
                start = end;
            }
            end = new Date();
            beatLength = (end.getTime() - start.getTime())/1000;
            beatLength = parseFloat(beatLength.toFixed(1));
            if (beatLength>=0.1){
                recordedBeatArray.push(beatLength);
            }
        }
        else{
            start = new Date();
            recordedBeatArray.push(0);
        }
    });
}
//IRA's CODE END//IRA's CODE END

//by Liza
//clothing for dancer
$('.dancer-make_beauty').on('click', function(){
	if(!$(this).hasClass('_active')){
		$(this).addClass('_active').text('Раздеть ;)');
		$('.dancer-cap, .dancer-scarf').addClass('_active');
	}else if($(this).hasClass('_active')){
		$(this).removeClass('_active').text('Сделать красиво ;)');
		$('.dancer-cap, .dancer-scarf').removeClass('_active');}
});

//function for rotate


function rotate(whatRotate, degree, time) {
	whatRotate.css({
		'-webkit-transform': 'rotateZ(' + degree + 'deg) translateX(50%)',
		'-moz-transform': 'rotateZ(' + degree + 'deg) translateX(50%)',
		'-ms-transform': 'rotateZ(' + degree + 'deg) translateX(50%)',
		'-o-transform': 'rotateZ(' + degree + 'deg) translateX(50%)',
		'transform': 'rotateZ(' + degree + 'deg) translateX(50%)',
		'-webkit-transition': 'all '+ time +'s',
		'-moz-transition': 'all '+ time +'s',
		'-ms-transition': 'all '+ time +'s',
		'-o-transition': 'all '+ time +'s',
		'transition': 'all '+ time +'s'
	});
}


var generateMovesList = function(){
    var danceResult=[];
    var moveLength;
    moveLength = moveBase.length;
    recordedBeatArray.splice(0,1);
    $(recordedBeatArray).each(function(){
        danceResult.push(Math.floor((Math.random() * (moveLength-1)) + 1));
    });
    playDance(danceResult);
}

var playDance = function(dance){
    var whatRotateId, whatRotateElement, time;
    var timeOut;
    var i = 0;
    var displayNumber = function() {
        humanPosition = moveBase[dance[i]].position;
        for (var j=0; j<=humanPosition.length;j++){
           if (humanPosition[j]==1){
               whatRotateId = j;
           }
        }
        whatRotateElement = $(idBodyParts[whatRotateId])
        if (i>0){
            timeOut  = recordedBeatArray[i-1]*1000;
            rotate(whatRotateElement, moveBase[dance[i]].x ,recordedBeatArray[i]);
        }else{
            timeOut = 0;
        }
        i++;
        if (i < dance.length) {
            if (i>0){
                if (dance[i]==dance[i-1]){
                    rotate(whatRotateElement, moveBase[dance[i]].y ,0.1);
                }
            }

            setTimeout(displayNumber, timeOut);
        }
    };

    displayNumber(); // to get the ball rolling
}
//end by Liza