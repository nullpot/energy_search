/*
 *選択された画面をtwitterに反映する関数
*/
function setTwitterImg() {
	document.getElementById("twitter_img").src = imgFolderName + drinks[selectedObjects[0]].image;
}

function getTwitter(){
var name = drinks[Number(selectedObjects[0])].name;

$.ajax({
    url: "http://157.7.204.121/twitter_search.php?word=" + name,
}).done(function(data){
	data.forEach(function(tweet, index){
		$(".drink-tweet-r").append("<div class='tweet_text'>" + tweet.text + "</div>");
	});
}).fail(function(error){
    console.log(error);
});
}
