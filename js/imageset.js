window.onload = init;

var selectedObjects = []; //選択された画像名のリスト

function init() {
	var drinkObjects = [];

	var raizin = document.getElementById("raizin");
	var redbull = document.getElementById("redbull");
	var monster_energy = document.getElementById("monster_energy");
	
	drinkObjects[0] = raizin;
	drinkObjects[1] = redbull;
	drinkObjects[2] = monster_energy;
	
	imageset(drinkObjects);
	eventAdd(drinkObjects);
}

/*
 *画像をセットする関数
*/
function imageset(drinkObjects) {
	var count = 0;
	drinkObjects.forEach(
	   function (drinkObject) {
		   drinkObject.src = "img/" +  drinks[count].image;
		   count++;
	   }
    );
}

/*
 *クリックイベントを追加する関数
 */
function eventAdd(drinkObjects) {
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
}

/*
 *画像を選択されたことを取得する関数
 */
function getClick(event) {;
	console.log(event.target); //FIXME:IE比対応
	//FIXME:追加削除が考慮できていない->配列の中身見て、追加削除する。
	selectedObjects[selectedObjects.length] = event.target.name; 
	console.log(selectedObjects);
}