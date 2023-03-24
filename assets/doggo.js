/*
    Dog Image API compliments of: 
        https://dog.ceo/dog-api/documentation/random
*/
const dogs = `https://dog.ceo/api/breeds/image/random/6`
const names = `https://randomuser.me/api/`

const postsContainer = document.getElementById('posts-container');

// Fetch Dog Image API
async function getPosts(){
	const response = await fetch(dogs);
	const data = await response.json();

	return data;
}

// Fetch Fake User API
async function getUser(){
	const response = await fetch(names);
	const data = await response.json();
	var rand = ((Math.random() * 10) + 1)
	var profile = []
	var profilePic = data.results[0].picture.thumbnail
	var profileUsername = ""
	var profileName = `${profileUsername = data.results[0].name.first} ${profileUsername = data.results[0].name.last}`
	
	rand = Math.floor(rand)
	if (rand == 1){
		profileUsername = `${data.results[0].name.first}${data.results[0].name.last}`
	}
	else if (rand == 2) {
		profileUsername = `${data.results[0].name.first}${data.results[0].name.last}`
	} else if (rand == 3) {
		let u = data.results[0].name.first
		profileUsername = `${u.charAt(0)}.${data.results[0].name.last}`
	} else if (rand == 4) {
		profileUsername = data.results[0].name.first
	} else if (rand == 5) {
		profileUsername = data.results[0].name.first
	} else if (rand == 6) {
		profileUsername = data.results[0].name.first
	} else if (rand == 7) {
		profileUsername = `TooCute${data.results[0].name.first}`
	} else {
		profileUsername = `TheReal${data.results[0].name.first}`
	}

	var odds = ((Math.random() * 5) + 1)
	odds = Math.floor(odds)
	var suffix2 = ((Math.random() * 99) + 1)
	suffix2 = Math.floor(suffix2)
	var suffix4 = ((Math.random() * 9999) + 1)
	suffix4 = Math.floor(suffix4)
	if (odds == 1){
		//	pass
	} else if (odds == 2){
		// 	pass
	} else if (odds == 3){
		profileUsername = `${profileUsername.concat(suffix2)}`
	} else if (odds == 4){
		profileUsername = `${profileUsername.concat(suffix2)}`
	} else {
		profileUsername = `${profileUsername.concat(suffix4)}`
	}

	console.log(`Odds: ${odds} \n Rand: ${rand}`)
	profile.push(profilePic, profileUsername, profileName)
	return profile
}

// Show Posts in DOM 
async function showPosts(){
	const posts = await getPosts();
	var i;

	for (i = 0; i < 6; i++){
		const postElement = document.createElement('div');
		postElement.classList.add('post');
		
		var profile = await getUser()
		var hours = ((Math.random() * 23) + 2)
		var likes = ((Math.random() * 999) + 1)

		postElement.innerHTML = `
			<div class="post-header">
				<div class="post-profile-img"><img src="${profile[0]}" id="profile-image" alt="Randomly generated user profile picture"></div>
				<div class="post-profile-txt"><h4>${profile[1]}</h4></div>
			</div>
			<div class="post-body">
				<img src="${posts.message[i]}" id="post-image" alt="Dogstagram image post of a dog somewhere in the world just as happy as can be.  Woof! ">
				<div class="mx-1 my-1">
					<div class="row">
						<h2 class="sharing"><i class="fas fa-heart"></i></h2>
						<h2 class="sharing"><i class="fas fa-comment-dots"></i></h2>
						<h2 class="sharing"><i class="fas fa-paper-plane"></i></h2>
					</div>
					<div class="like row">
						<h5 class="liked">Liked by <span class="bold">YOU</span> and <span class="bold">${Math.floor(likes)} others</span></h5>
					</div>
				</div>
			</div>
			<div class="post-footer">
				<hr>
				<h5 id="time-stamp">${Math.floor(hours)} HOURS AGO</h5>
			</div>
		`;
		postsContainer.appendChild(postElement)
	}
	console.log('Posts added')
}

// Show Loader & Fetch more posts 
function showLoading(){
	loader.classList.add('show')
	setTimeout(()=>{
		loader.classList.remove('show');
		showPosts()
	}, 2500)
}

// User Excperience Loader
const loader = document.querySelector('.loader');
window.addEventListener('scroll', ()=>{
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

	if(scrollTop + clientHeight >= scrollHeight - 5){
		showLoading()
	}
})

// Modal
// Open the Modal
function openModal() {
	document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }

// Show Initial Posts 
showPosts()