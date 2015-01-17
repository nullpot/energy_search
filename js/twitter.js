$.ajax({
    url: "http://157.7.204.121/twitter_search.php?word=レッドブル",
}).done(function(data){
    console.log(data);
}).fail(function(error){
    console.log(error);
});