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
	return data
}

// Show Posts in DOM 
async function showPosts(){
	const posts = await getPosts();
	var i;

	for (i = 0; i < 6; i++){
		const postElement = document.createElement('div');
		postElement.classList.add('post');
		
		var name = await getUser()
		var hours = ((Math.random() * 23) + 2)
		var username = ((Math.random() * 99) + 1)
		var likes = ((Math.random() * 999) + 1)
		var rand = ((Math.random() * 2) + 1)
		rand = Math.floor(rand)
		let dash = '_'
		rand == 1 ? dash = '-' : dash = '_'

		postElement.innerHTML = `
			<div class="post-header">
				<div class="post-profile-img"><img src="${name.results[0].picture.thumbnail}" id="profile-image" alt="Randomly generated user profile picture"></div>
				<div class="post-profile-txt"><h4>${name.results[0].name.first}${dash}${name.results[0].name.last}${Math.floor(username)}</h4></div>
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