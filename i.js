var userIcon = document.querySelector('.fa-user');
  
  var cartIcon = document.querySelector('.fa-cart-shopping');

  
  userIcon.addEventListener('click', function() {
    window.location.href = "user_profile.html"; 
  });

  cartIcon.addEventListener('click', function() {
    window.location.href = "shopping_cart.html"; // Alışveriş sepeti sayfasının URL'si
  });