/**
 * Created by Liza on 17.10.2014.
 */
 //IRA's CODE BEGIN
$(document).ready(function(){
	var moveBase = [
		//position layout [Left Hand, Right Hand, Left Leg, Right Leg] 1 - if active
		{id: 1, name: "lHandUp", functionName: "", x:"", y:"", position: [1,0,0,0]},
		{id: 2, name: "rHandUp", functionName: "", x:"", y:"", position: [0,1,0,0]},
		{id: 3, name: "lLegToSide", functionName: "", x:"", y:"", position: [0,0,1,0]},
		{id: 4, name: "rLegToSide", functionName: "", x:"", y:"", position: [0,0,0,1]},
		{id: 5, name: "lHandToSide", functionName: "", x:"", y:"", position: [1,0,0,0]},
		{id: 6, name: "rHandToSide", functionName: "", x:"", y:"", position: [0,1,0,0]},
		{id: 7, name: "mixer", functionName: "", x:"", y:"", position: [1,1,1,1]},
	];

	var humanPosition = {position: [0,0,0,0], moveActiveId: "1111"};

	
	
	/*$('.js-test-block').click(function(){
		var testText = "";
		$.each(moveBase, function(k,v){
			console.log(v.name)
		})
		
		$(".js-test-wrapper").append(testText);
	})*/
})
//IRA's CODE END

//by Liza
//clothing for dancer
$('.dancer-make_beauty').on('click', function(){
		$(this).addClass('_active').text('Раздеть ;)');
		$('.dancer-cap, .dancer-scarf').addClass('_active');
});

//end by Liza