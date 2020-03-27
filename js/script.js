

$(document).ready(function(){

    console.log("DOM is ready");


    //fades in title
    $('#title').fadeIn(3000);
    
    // wait until window is loaded (images, links etc...)
    window.onload = function() {
        
        console.log("window is loaded");


    };

});

/*
const API_URL ='https://rickandmortyapi.com/api/'

const displayQuote = () => {
	console.log('About to display a quote.....!')
	

	fetch(API_URL)

	.then((response) => {
		
	return response.json();


})

	.then ((data) => {
		console.log('Data-Received', data.quote)
	


	//okay I got data, now do something with it

	document.getElementById('quote').src = data.quote })




	.catch((err) => {

		console.log('there is an error dude', err)
	})


//anatomy of fetch
//fetch(API_URL) this init the call to api
// .then(...) handles response, turns into JSON
// .then(data) received the data from prev then
// here's where you want to do something with data that we got back
// .catch(error) only happens if awry


}
	
*/
$("button").on("click", searchPrototype);

function jsonFlickrFeed(json) {
  console.log(json);
  
  $.each(json.items, function(i, item) {
    $("<img />").attr("src", item.media.m).appendTo("#images");
  });
};

function searchPrototype() {
  $(".s-button").remove();
  
  $.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: { "tags": "Rick & Morty", "format": "json" }
  });
}


// displayImage()   

//add event listener for click on refresh
 
// document.getElementById('refresh').addEventListener('click', displayImage)









