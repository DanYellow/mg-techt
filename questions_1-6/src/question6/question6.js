Array.from(document.querySelectorAll('a[title]'))
  .forEach(function(link) {
    link.style.fontWeight = 'bold';
    link.removeAttribute('href', null);
    link.addEventListener('click', function(e) {
      console.log(e.currentTarget.getAttribute('title'));
    })
  });