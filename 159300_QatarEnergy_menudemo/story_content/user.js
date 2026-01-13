window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script25 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("YY_audioFileName");
var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/"+Location+".wav";
audio.load();
audio.play();
player.setVar("ZZ_audioLoaded", "true");
var XX_soundOn = player.GetVar("XX_soundOn");


if (!XX_soundOn) {
	audio.volume = 0;
	}
else {
	audio.volume = 0.2;
	}
}

window.Script26 = function()
{
  

// Defining the objects by their unique IDs
const map = object('6SQ8Fv56rhw');

const _btn1_RaffanGroup = object('5W1PapemBwj');
const _btn2_Msheireb = object('6qHz8I7873X');
const _btn3_SouqWaqifGroup = object('6eCoHs5eE5t');
const _btn4_Mesaieed = object('5cfwGBbT1Hz');
const _btn5_DukhanGroup = object('6CExCgCouk5');
const _btn6_AlKharsaah = object('6EkqsRyUtXO');
const _btn7_Offshore = object('6M75rm21vJZ');
const _btn8_HQ = object('5nlUUo5bHbq');
const _btn9_HanulIsland = object('68khX0BC15q');

update(() => {
if (getVar('ZZ_parallaxEnabled') == true) {

// Get the center of the screen
    const centerX = slideWidth() / 2;
  	const centerY = slideHeight() / 2;


// Calculate how far the pointer is from the center of the screen
  const offsetX = pointerX() - centerX;
  const offsetY = pointerY() - centerY;
  
// Horizontal Movement speed of map
  map.x = offsetX * -0.02 + centerX - 662.5;

  
// Horizontal Movement speed of btns, including manual offset
    _btn1_RaffanGroup.x = map.x + 699;
    _btn2_Msheireb.x = map.x + 470;
    _btn3_SouqWaqifGroup.x = map.x + 701;
    _btn4_Mesaieed.x = map.x + 732;
    _btn5_DukhanGroup.x = map.x + 248;
    _btn6_AlKharsaah.x = map.x + 318;
    _btn7_Offshore.x = map.x + 1042;
    _btn8_HQ.x = map.x + 640;
    _btn9_HanulIsland.x = map.x + 903;
    
// Vertical movement speed of map
  map.y = offsetY * -0.02 + centerY - 388;

  
// Vertical movement speed of btns, including manual offset
    _btn1_RaffanGroup.y = map.y + 79;
    _btn2_Msheireb.y = map.y + 338;
    _btn3_SouqWaqifGroup.y = map.y + 398;
    _btn4_Mesaieed.y = map.y + 591;
    _btn5_DukhanGroup.y = map.y + 323;
    _btn6_AlKharsaah.y = map.y + 485;
    _btn7_Offshore.y = map.y + 55;
    _btn8_HQ.y = map.y + 255;
    _btn9_HanulIsland.y = map.y + 210;
}
})
}

};
