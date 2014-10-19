/**
 * Created by Liza on 17.10.2014.
 */
 //IRA's CODE BEGIN
 var moveBase = [
		//position layout [Left Hand, Right Hand, Left Leg, Right Leg] 1 - if active
		{id: 1, name: "lHandUp", functionName: "", x:"145", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 2, name: "lHandUp", functionName: "", x:"155", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 3, name: "lHandUp", functionName: "", x:"165", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 4, name: "lHandUp", functionName: "", x:"175", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 5, name: "lHandUp", functionName: "", x:"185", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 6, name: "lHandUp", functionName: "", x:"195", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 7, name: "lHandUp", functionName: "", x:"205", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 8, name: "lHandUp", functionName: "", x:"215", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 9, name: "lHandUp", functionName: "", x:"225", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 10, name: "lHandUp", functionName: "", x:"175", y:"95",time: "0,3", position: [1,0,0,0]},
		{id: 11, name: "rHandUp", functionName: "", x:"5", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 12, name: "rHandUp", functionName: "", x:"15", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 13, name: "rHandUp", functionName: "", x:"25", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 14, name: "rHandUp", functionName: "", x:"35", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 15, name: "rHandUp", functionName: "", x:"45", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 16, name: "rHandUp", functionName: "", x:"55", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 17, name: "rHandUp", functionName: "", x:"65", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 18, name: "rHandUp", functionName: "", x:"75", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 19, name: "rHandUp", functionName: "", x:"85", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 20, name: "rHandUp", functionName: "", x:"95", y:"85", time: "0,2", position: [0,1,0,0]},
		{id: 21, name: "lLegToSide", functionName: "", x:"5", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 22, name: "lLegToSide", functionName: "", x:"15", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 23, name: "lLegToSide", functionName: "", x:"25", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 24, name: "lLegToSide", functionName: "", x:"35", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 25, name: "lLegToSide", functionName: "", x:"45", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 26, name: "lLegToSide", functionName: "", x:"55", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 27, name: "lLegToSide", functionName: "", x:"65", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 28, name: "lLegToSide", functionName: "", x:"75", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 29, name: "lLegToSide", functionName: "", x:"85", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 30, name: "lLegToSide", functionName: "", x:"95", y:"95", time:"0,1", position: [0,0,1,0]},
		{id: 31, name: "rLegToSide", functionName: "", x:"145", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 32, name: "rLegToSide", functionName: "", x:"155", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 33, name: "rLegToSide", functionName: "", x:"165", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 34, name: "rLegToSide", functionName: "", x:"175", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 35, name: "rLegToSide", functionName: "", x:"185", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 36, name: "rLegToSide", functionName: "", x:"195", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 37, name: "rLegToSide", functionName: "", x:"205", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 38, name: "rLegToSide", functionName: "", x:"215", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 39, name: "rLegToSide", functionName: "", x:"225", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 40, name: "rLegToSide", functionName: "", x:"235", y:"85", time: "0,3", position: [0,0,0,1]},
		{id: 41, name: "lHandToSide", functionName: "", x:"30", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 42, name: "lHandToSide", functionName: "", x:"40", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 43, name: "lHandToSide", functionName: "", x:"50", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 44, name: "lHandToSide", functionName: "", x:"60", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 45, name: "lHandToSide", functionName: "", x:"70", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 46, name: "lHandToSide", functionName: "", x:"80", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 47, name: "lHandToSide", functionName: "", x:"90", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 48, name: "lHandToSide", functionName: "", x:"100", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 49, name: "lHandToSide", functionName: "", x:"110", y:"95", time:"0,2", position: [1,0,0,0]},
		{id: 50, name: "rHandToSide", functionName: "", x:"-25", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 51, name: "rHandToSide", functionName: "", x:"-35", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 52, name: "rHandToSide", functionName: "", x:"-45", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 53, name: "rHandToSide", functionName: "", x:"-55", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 54, name: "rHandToSide", functionName: "", x:"-65", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 55, name: "rHandToSide", functionName: "", x:"-75", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 56, name: "rHandToSide", functionName: "", x:"-85", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 57, name: "rHandToSide", functionName: "", x:"-95", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 58, name: "rHandToSide", functionName: "", x:"-105", y:"85",time:"0,3", position: [0,1,0,0]},
		{id: 59, name: "rHandToSide", functionName: "", x:"-115", y:"85",time:"0,3", position: [0,1,0,0]},
        {id: 60, name: "rHandToSide", functionName: "", x:"-125", y:"85",time:"0,3", position: [0,1,0,0]}
/*		{id: 7, name: "mixer", functionName: "", x:"", y:"", time:"0,1",position: [1,1,1,1]}*/
	];
    var idBodyParts = ["._right_hand","._left_hand","._right_leg","._left_leg"];//for position identifikate
	var humanPosition = {position: [0,0,0,0]};
    var recordedBeatArray = [];
    var ifRecordBeat = 0;
	var start;
    var end;
    var danceResult=[];
    var danceResult2=[];
    var chooseLevel = 0;
$(document).ready(function(){
	$(".beat-block").click(function(){
        if (ifRecordBeat==0){
            checkBeat();
            ifRecordBeat = 1;
            $(".js-beat-start").addClass("hidden");
			$('.js-buttons-block, .visual-look').fadeIn()
        }
	});

    $('.button-start').on('click', function(){
        if (recordedBeatArray.length==0){
            alert("Вы не задали биток =(")
        }else{
            $('.dancer-wrapper, .bottom-buttons').fadeIn();
            $(".js-beat-start").addClass("hidden");
            $('.js-buttons-block, .visual-look').hide();
            generateMovesList();
            $('body').off("keydown");
            ifRecordBeat = 0;
        }


    });

	$('body').keydown(function(){
		var randomColor = '#' + Math.random().toString(16).substring(2, 8);
		$('.visual-look').css('color', randomColor);
	});



    $('.button-play_again').click(function(){
        $('.dancer-wrapper div').attr("style","")
        playDance(danceResult);
        /*playDance(danceResult2)*/;
    });

    $('.button-do_again').click(function(){
        location.reload();
    });

    $('.button-repeat').click(function(){
        location.reload();
    })
});



var checkBeat = function(){
    var beatLength;
    var checkEmpty = 0;
	$('body').on("keydown", function(){
        if (checkEmpty != 0 ){
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
            checkEmpty = 1;
        }

    });
}


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

//move head
function moveHead(positionLeft, time){
	$('.dancer-head').animate({
		'left': positionLeft
	}, time);
}

var generateMovesList = function(){
    var moveLength;
    var generateNumber;
    var generateNumber2;
    moveLength = moveBase.length;
    $(recordedBeatArray).each(function(){
        generateNumber = Math.floor((Math.random() * (moveLength-1)) + 1);
        generateNumber2 = Math.floor((Math.random() * (moveLength-1)) + 1);
        humanPosition = moveBase[generateNumber].position;
        danceResult.push(generateNumber);
        /*danceResult2.push(generateNumber2);*/
    });
    playDance(danceResult);
    /*if (chooseLevel = 1){
        playDance(danceResult2);//tictionic level
    }*/


}

var playDance = function(dance){
    var whatRotateId, whatRotateElement, time;
    var timeOut;
    var i = -1;
    var legActive=0;
    var displayNumber = function() {

        i++;
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
            headRotate(timeOut/20, 5, recordedBeatArray[i-1]);
        }else{
            timeOut = 0;
        }


        if (i < dance.length-1) {
            if (i>0){
                /*if (dance[i]==dance[i-1]){
                    rotate(whatRotateElement, moveBase[dance[i]].y ,0);
                    *//*whatRotateElement.attr("style","");*//*
                }*/
                if (chooseLevel !=2){//иначе- балерун
                    if (dance[i]<40 && dance[i]>20){
                        if (legActive != 0) {
                           rotate($('._left_leg'), 95 ,0);
                           rotate($('._right_leg'), 85 ,0);
                        }else{
                            legActive=1;
                        }
                    }
                }

            }

            setTimeout(displayNumber, timeOut);
        }

    };

    displayNumber(); // to get the ball rolling
}
function headRotate(degree,left, time){
    $('.dancer-head').css({
		'-webkit-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'-moz-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'-ms-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'-o-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
        '-webkit-transition': 'all '+ time +'s',
		'-moz-transition': 'all '+ time +'s',
		'-ms-transition': 'all '+ time +'s',
		'-o-transition': 'all '+ time +'s',
		'transition': 'all '+ time +'s'
	});

}