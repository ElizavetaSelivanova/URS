/**
 * Created by iryna.levina on 19.10.2014.
 */
var playButton = document.getElementById('play');
/*
var url = 'https://api.soundcloud.com/tracks/23681901/stream?consumer_key=T8Yki6U2061gLUkWvLA';*/
var url = 'https://api.soundcloud.com/tracks/21344145/stream?consumer_key=T8Yki6U2061gLUkWvLA';


// создаем аудио контекст
var context = new window.AudioContext();     var analyser = context.createAnalyser();

// переменные для буфера, источника и получателя
var buffer, source, destination;



// функция для подгрузки файла в буфер
var loadSoundFile = function(url) {
  // делаем XMLHttpRequest (AJAX) на сервер
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer'; // важно
  xhr.onload = function(e) {
    // декодируем бинарный ответ
    context.decodeAudioData(this.response,
    function(decodedArrayBuffer) {
      // получаем декодированный буфер
      buffer = decodedArrayBuffer;
      playButton.classList.add('ready');
    }, function(e) {
      console.log('Error decoding file', e);
    });
  };
  xhr.send();
}

function getAverageVolume(array) {
    var values = [0,0];
    var average = [0,0];

    var length = array.length;

    // get all the frequency amplitudes
    for (var i = 0; i < length/2; i++) {
        values[0] += array[i];
        values[1] += array[length/2+i];
    }

    average[0] = values[0] / length;
    average[1] = values[1] / length;
    return average;
}



// функция начала воспроизведения
var play = function(){
  // создаем источник
  source = context.createBufferSource();
  // подключаем буфер к источнику
  source.buffer = buffer;







    // дефолтный получатель звука
  destination = context.destination;

    // подключаем источник к получателю
  source.connect(analyser);
  analyser.connect(destination);

    // воспроизводим
  source.start(0);
var array ;
var hand = $('.js-right-hand');
var leg = $('.js-left-leg');

setInterval(function(){

 array =  new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    var average = getAverageVolume(array);
    rotate(leg, 2*average[0], 0);
    rotate(hand, average[1], 0);
    headRotate(average[0]/6,average[1]/3);


}, 10);
    var ind = 1;
    setInterval(function(){

  if (ind == 1){
         $('.dancer-cap').css("top", -32);
         $('.dancer-scarf').css("top", 138);
      ind = 0;
  }else{
        $('.dancer-cap').css("top", -28);
        $('.dancer-scarf').css("top", 134) ;
      ind = 1;
  }


}, 300);







};



// функция остановки воспроизведения
var stop = function(){
  source.stop(0);
}

loadSoundFile(url);
playButton.addEventListener('click', play);




$('#stop').click(function(){
    stop();
})
$('.dancer-make_beauty').on('click', function(){
	if(!$(this).hasClass('_active')){
		$(this).addClass('_active').text('Раздеть ;)');
		$('.dancer-cap, .dancer-scarf').addClass('_active');
	}else if($(this).hasClass('_active')){
		$(this).removeClass('_active').text('Сделать красиво ;)');
		$('.dancer-cap, .dancer-scarf').removeClass('_active');}
});



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

function headRotate(degree, left){
    $('.dancer-head').css({
		'-webkit-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'-moz-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'-ms-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'-o-transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)',
		'transform': 'rotateZ(' + degree + 'deg) translateX('+left+'%)'
	});

}