document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const userQuery = searchInput.value;
      const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(userQuery);
  

      searchForm.action = googleSearchUrl;
  
   
      searchForm.submit();
    });
  });

  

$('#logout').on('click', function() {

        window.location.href = 'website.html';
  
});

