// loadDetailsBreadcrumbs.js
function loadDetailsBreadcrumbs() {
    fetch('breadcrumbs.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('detailsbreadcrumbs-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading breadcrumbs:', error));
  }
  
  // Call the function to load the details breadcrumb
  document.addEventListener('DOMContentLoaded', loadDetailsBreadcrumbs);