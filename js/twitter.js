var name = drinks[Number(selectedObjects[0])].name;

$.ajax({
    url: "http://157.7.204.121/twitter_search.php?word=" + name,
}).done(function(data){
	data.forEach(function(tweet, index){
		$(".drink-tweet").append("<div class='tweet_text'>");
		$(".drink-tweet").append(tweet.text);
		$(".drink-tweet").append("</div>");
	});
}).fail(function(error){
    console.log(error);
});