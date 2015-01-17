<?php
	// twitter API関連
	if (!defined('TW_CONSUMER_KEY'))		{ define('TW_CONSUMER_KEY',		'ZI76FIWluAZKn0Shbx8efZezm');}
	if (!defined('TW_CONSUMER_SECRET'))		{ define('TW_CONSUMER_SECRET',	'jC7Hqk0EMMMQOKoxsJfrYoxogXeyzEc9LKUikuqGEL339nnBfK');}
	if (!defined('ACCESS_TOKEN')) 			{ define('ACCESS_TOKEN',		''); }
	if (!defined('ACCESS_TOKEN_SECRET'))	{ define('ACCESS_TOKEN_SECRET',	''); }

	require_once('twitter/twitteroauth.php');
	$twObj	= new TwitterOAuth(TW_CONSUMER_KEY,TW_CONSUMER_SECRET,ACCESS_TOKEN,ACCESS_TOKEN_SECRET);

	//Twitterで検索するワード
	//$search_word = array('redbull'); // 3つまでOKだったはず
	$search_word = array(htmlspecialchars($_GET['word'], ENT_QUOTES)); // 3つまでOKだったはず

		//API実行データ取得
		//現時点で100ツイートまでしか取得不可
		$vRequest	= $twObj->OAuthRequest('https://api.twitter.com/1.1/search/tweets.json','GET',
									   array('q'=>$search_word,'count'=>'20','include_entities'=>'true')); //API 1.1で変更

		//Jsonデータをオブジェクトに変更
		$oObj		= json_decode($vRequest);

		//オブジェクトを展開
		$oObj		= $oObj->{'statuses'};	// API 1.1でresultsからstatusesに変更
		header('Access-Control-Allow-Origin: *');
		header("Content-Type: application/json; charset=utf-8");
		print_r(json_encode($oObj));

	//for($i_tweet = 0; $i_tweet < sizeof($oObj); $i_tweet++){
		//	@ $user_id				= $oObj[$i_tweet]			->{'user'}		->{'id'};							//ユーザーID　API 1.1で変更
		//	@ $screen_name			= $oObj[$i_tweet]			->{'user'}		->{'screen_name'};					//ユーザーID　API 1.1で変更
		//	@ $user_name			= $oObj[$i_tweet]			->{'user'}		->{'name'};							//名前 API 1.1で変更
		//	@ $id_str				= (string)$oObj[$i_tweet]	->{'id_str'};										//つぶやきのID
		//	@ $profile_image_url	= $oObj[$i_tweet]			->{'user'}		->{'profile_image_url'};			//プロフィール画像のURL　API 1.1で変更
		//	@ $media_url_https		= $oObj[$i_tweet]			->entities		->media[0]->	{'media_url_https'};//Twitterでアップした画像のURL
		//	@ $text					= $oObj[$i_tweet]			->{'text'};											//ツイート
		//	@ $created_at			= $oObj[$i_tweet]			->{'created_at'};									//時間
		//	@ $strtotime			= strtotime($created_at);														//Unixタイムスタンプに変換
		//	@ $datetime				= date('Y-m-d H:i:s', $strtotime);												//20xx-01-01-00:00:00形式
		//
		//	// プロフィール画像のURLから画像データを取得
		//	@ $$profile_image_data 	= file_get_contents($profile_image_url);
		//
		//}

