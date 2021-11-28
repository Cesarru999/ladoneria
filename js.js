var user = {
	name : 'Cesar',
	age : 22,
	country : 'Mexico',
	languages : {
		native : 'Spanish',
		lernt : ['English', 'German', 'Russian']
	}
};
a = user['languages'];
b = a['lernt'];
for(var i = 0; i <= b.length; i++){
	console.log(b[i]);
}