<?php
	$pn = $_POST['p_n']??'';
	$dir = "https://api.whatsapp.com/send?phone=".$pn;
	if($pn==""){
		header('location: index.html');
	}else{
		header('location: '.$dir);
	}

?>