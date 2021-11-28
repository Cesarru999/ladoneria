var users = [{
	name: 'Cesar',
	gender: 'Male',
	hobby: 'Programming',
	avatar: 'https://pbs.twimg.com/media/BWRy3rlCUAAnPWJ.jpg'
	},{
	name: 'Gabi',
	gender: 'Female',
	hobby: 'Baking',
	avatar: 'https://lh3.googleusercontent.com/proxy/s-cJQWOm9aeGw4emf9bKOS_Jl0647xRhFSCHWOzRsW3s9SDhC-k7fhjtOxlhq3USFihkYT4kqbiHOvmc36ALdgU-WeynInEfgAXSiE-bpIsPDHOT9ShmtBG_raC3ekRJfKz9jCp6OHnamwy3x8flatcPVSUEV561Q5o7mJ_Slw'
	},{
	name: 'Lolo',
	gender: 'Male',
	hobby: 'Movies',
	avatar: 'https://pbs.twimg.com/media/BtjSPXMIQAAElkj.jpg'
	},{
	name: 'Liubov',
	gender: 'Female',
	hobby: 'Teaching',
	avatar: 'https://i.pinimg.com/originals/93/2b/f7/932bf794d8f336aaf1b64286b55c2d13.png'
	},{
	name: 'Julia',
	gender: 'Female',
	hobby: 'Games',
	avatar: 'https://pbs.twimg.com/media/BUpDb0kCUAAV2YL.jpg'
	}];

function search(){

		// get Hobby
		var hobbyField = document.getElementById('hobby');
		var hobby = hobbyField.value;
		console.log(hobby);

		//get Gender
		var genderField = document.getElementById('gender');
		var gender = genderField.options[genderField.selectedIndex].value;
		console.log(gender);

		var resultsHTML = '';
		var numUsers = users.length;

		for(var i = 0; i < numUsers; i++){
			if(gender == 'A' || gender == users[i].gender){
				if(hobby == "" || hobby == users[i].hobby){
					resultsHTML += '<div class="person-row">\
							<img width="50" src="'+users[i].avatar+'" />\
							<div class="person-info">\
								<div>'+users[i].name+'</div>\
								<div>'+users[i].hobby+'</div>\
							</div>\
							<button>Add</button>\
						</div>';
				}	
			}	
		}

		results.innerHTML = resultsHTML;
	}

window.addEventListener('load', function(){
	console.log('La pagina esta lista');

	var results = document.getElementById('results');
	var searchBtn = document.getElementById('searchBtn');
	searchBtn.addEventListener('click', search)
	search();
	if(window.innerWidth > 500 && window.innerWidth < 1000){
		alert('La ventana en mayor a 500 y menor a 1000');
	}	
});
