let header = document.querySelector('header')
let sections = document.querySelectorAll('section')
let navlink = document.querySelectorAll("nav a")
let navbarTwo = document.querySelector(".navbarTwo")
let uicheckbox = document.getElementById('uicheckbox')
let hamburger = false
document.addEventListener("DOMContentLoaded", function () {
    // Get the container element
    var container = document.getElementById("card-cont");
  
    // Function to fetch and display cards based on the provided category
    function displayCards(category) {
      fetch("main.json")
        .then(response => response.json())
        .then(data => {
          // Clear the container before appending new cards
          container.innerHTML = '';
  
          // Iterate over the selected category of data and create Bootstrap cards
          data[category].forEach(card => {
            var cardHtml = `
            <div class="menu-1">
            <img src="${card.image}" alt=""> <br>
            <img id="star" src="${card.star}" alt="">
            <h4 id = "food-h">${card.header}</h4>
            <p id = "food">${card.para}</p>
        
        </div>
            `;
  
            // Append the card HTML to the container
            container.innerHTML += cardHtml;
          });
        })
        .catch(error => console.error("Error fetching data:", error));
    }
  
    // Attach click event listeners to buttons
    document.getElementById("All-dishes").addEventListener("click", function () {
        displayCards("Alldishes");
      });
    
    document.getElementById("Breakfast").addEventListener("click", function () {
      displayCards("Breakfast");
    });
  
    document.getElementById("Lunch").addEventListener("click", function () {
      displayCards("Lunch");
    });
  
    document.getElementById("Dessert").addEventListener("click", function () {
      displayCards("Dessert");
    });
  });


  // -------------------------TESTIMONIAL-----------------------------------

  scrollFunction=()=>{
    if(document.body.scrollTop >100 || document.documentElement.scrollTop>100){
      header.style.background = "black";
      header.style.transition = '0.5s'
  } else {
    header.style.background="none"
  }
  sections.forEach(sec=>{
      let top = window.scrollY;
      let offset = sec.offsetTop -50;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
          navlink.forEach(links =>{
              links.classList.remove('active');
              document.querySelector('nav a[href*=' +id + ']').classList.add('active')
          })
      }
  })
  }
  
  window.onscroll = ()=>{scrollFunction()}
  
 
  uicheckbox.addEventListener('click', ()=>{
    hamburger = !hamburger
    if(hamburger){
      navbarTwo.style.display='block'
    } else{
      navbarTwo.style.display='none'
    }
  })