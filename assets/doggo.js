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
		// JohnAppleseed
		profileUsername = `${data.results[0].name.first}${data.results[0].name.last}`
	}
	else if (rand == 2) {
		// JohnAppleseed
		profileUsername = `${data.results[0].name.first}${data.results[0].name.last}`
	} else if (rand == 3) {
		// JAppleseed
		let u = data.results[0].name.first
		profileUsername = `${u.charAt(0)}.${data.results[0].name.last}`
	} else if (rand == 4) {
		// John
		profileUsername = data.results[0].name.first
	} else if (rand == 5) {
		// John
		profileUsername = data.results[0].name.first
	} else if (rand == 6) {
		// John
		profileUsername = data.results[0].name.first
	} else if (rand == 7) {
		// OleJohn
		profileUsername = `Ole${data.results[0].name.first}`
	} else if (rand == 8) {
		// I_am_John
		profileUsername = `I_am_${data.results[0].name.first}`
	} else if (rand == 9) {
		// TooCuteJohn
		profileUsername = `TooCute${data.results[0].name.first}`
	} else {
		// TheRealJohn
		profileUsername = `TheReal${data.results[0].name.first}`
	}

	var odds = ((Math.random() * 6) + 1)
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
		// pass
	} else if (odds == 4){
		profileUsername = `${profileUsername.concat(suffix2)}`
	} else if (odds == 5){
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

		// <div class="post-profile-txt"><h4>${profile[1]}</h4> ⚬<h4 id="time-stamp">${Math.floor(hours)} HOURS AGO</h4></div>

		postElement.innerHTML = `
			<div class="post-header">
				<div class="post-profile-img"><img src="${profile[0]}" id="profile-image" alt="Randomly generated user profile picture"></div>
				<div class="post-profile-txt"><h4>${profile[1]} <span id="time-stamp">⚬ ${Math.floor(hours)}h</span></h4></div>
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
						<h4>${Math.floor(likes)} likes</h5>
					</div>
					<div class="like row">
						<strong>${profile[1]}</strong> &nbsp; ${getBreed(posts.message[i])}
					</div>
				</div>
			</div>
			
		`;
		postsContainer.appendChild(postElement)
	}
	console.log('Posts added')
}

function getBreed(url){
	const [http, blank, domain, breeds, breed, image] = url.split("/")

	var adjectives1 = ["#dogstagram", "#dog", "#doggo", "#pupper", "#puppylove", "#puppy", "#InstaDog", "#DogOfTheDay", "#Doge", "#Wags", "#ILoveMyDog", "#DogSitting", "#PuppyGram", "#InstaPup", "#PuppyDogEyes"]
	var adjectives2 = ["#Adopt", "#AdoptDontShop", "#Adoption", "#AdoptDogs", "#AdoptDontBuy", "#AdoptDontBreed", "#Rescue", "#RescueDog", "#RescueDogsOfInstagram", "#Rescued", "#RescuePuppy", "#RescueDogsRule", "#RescueDogsOfIG", "#RescuePetsOfInstagram", "#Foster", "#FosterDog", "#ShelterDog"]

	var rand1 = ((Math.random() * adjectives1.length))
	rand1 = Math.floor(rand1)
	var rand2 = ((Math.random() * adjectives2.length))
	rand2 = Math.floor(rand2)

	if(breed.includes("-"))
	{
		var b = breed.split("-")
		b = `#${b[1]} #${b[0]} ${adjectives1[rand1]} ${adjectives2[rand2]}`
	} else {
		var b = `#${breed} ${adjectives1[rand1]} ${adjectives2[rand2]}`
	}

	return b
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