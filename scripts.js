function toggleMaker(className, showName) {
	let toggles = document.querySelectorAll('.' + className)

	for (let i = 0; i < toggles.length; i++) { 
	  	toggles[i].addEventListener('click', function() {
    		this.classList.toggle(showName)
  		})
	}
}


toggleMaker('toggle', 'show')

toggleMaker('toggle-2', 'show-2')

toggleMaker('toggle-3', 'show-3')