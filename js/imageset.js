window.onload = init;

var selectedObjects = []; //選択された画像名のリスト
var imgFolderName = "img/";

function init() {
	var drinkObjects = [];

	var raizin = document.getElementById("raizin");
	var redbull = document.getElementById("redbull");
	var monster_energy = document.getElementById("monster_energy");
	var repo_d = document.getElementById("repo_d");
	var ari_v = document.getElementById("ari_v");
	var tiobita = document.getElementById("tiobita");
	var select_button = document.getElementById("select");
	
	drinkObjects[0] = raizin;
	drinkObjects[1] = redbull;
	drinkObjects[2] = monster_energy;
	drinkObjects[3] = repo_d;
	drinkObjects[4] = ari_v;
	drinkObjects[5] = tiobita;
	
	imageset(drinkObjects);
	eventAdd(drinkObjects, select_button);
}

/*
 *画像をセットする関数
*/
function imageset(drinkObjects) {
	var count = 0;
	drinkObjects.forEach(
	   function (drinkObject) {
		   drinkObject.src = imgFolderName + drinks[count].image;
		   count++;
	   }
    );
}

/*
 *クリックイベントを追加する関数
 */
function eventAdd(drinkObjects, select_button) {
    //各エレメントに選択状態イベントの追加
	drinkObjects.forEach(
		function(drinkObject) {
			if (drinkObject.addEventListener) { 
				drinkObject.addEventListener('click', getClick, false);
			} else if (drinkimg.attachEvent) { //for IE
				drinkObject.attachEvent('click', getClick);
			}
		}
	);
	
	if (select_button.addEventListener) { 
		select_button.addEventListener('click', drawChart, false);
		select_button.addEventListener('click', getTwitter, false);
	} else if (select_button.attachEvent) { //for IE
		select_button.attachEvent('click', drawChart);
		select_button.attachEvent('click', getTwitter);
	}
	
}

/*
 *画像を選択されたことを取得する関数
 */
function getClick(event) {;
	//TODO:配列の中身を全て、操作する必要がある。img1個1個の状態に応じてではないため、スケーラビリティは低い。
	if(selectedObjects.indexOf(event.target.name) >= 0 ) {
		selectedObjects.splice(selectedObjects.indexOf(event.target.name),1);
	} else {
		selectedObjects[selectedObjects.length] = event.target.name; 
	}
	
	//画像を選択された時に画像を切り替える
	if(event.target.className = "selected") { //TODO:クラス存在を確認する関数があった気がする(jqueryのaddClassとか)。。。
		event.target.className = "";
		//event.target.classList.remove("selected");
	} else {
		event.target.className = "selected";
		//event.target.classList.add("selected");
	}
	
	console.log(selectedObjects);
}

