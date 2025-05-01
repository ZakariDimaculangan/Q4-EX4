function checklibsec(){
	var section=document.getElementById('lib-sec').value;
	switch (section){
		case"F":
			document.getElementById('result-libsec').innerHTML='Fiction';
			break;
		case"N":
			document.getElementById('result-libsec').innerHTML='Non-Fiction';
			break;
		case "R":
			document.getElementById('result-libsec').innerHTML='Reference';
			break;
		default:
			document.getElementById('result-libsec').innerHTML='Failed';
	}
}

	function checkgradesec(){
		var section=document.getElementById('gradesec').value;
	switch (section){
		case"1":
			document.getElementById('result-gradesec').innerHTML='Emerald';
			break;
		case"2":
			document.getElementById('result-gradesec').innerHTML='Ruby';
			break;
		case"3":
			document.getElementById('result-gradesec').innerHTML='Sapphire';
			break;
		case"4":
			document.getElementById('result-gradesec').innerHTML='Topas';
		default:
			document.getElementById('result-gradesec').innerHTML='Failed'
	}
