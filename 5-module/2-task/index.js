function toggleText() {
  
  let toggler = document.querySelector('.toggle-text-button');
  let buttonOpen = document.getElementById('text');


  toggler.addEventListener('click', function() {
    buttonOpen.setAttribute('hidden', 'hidden');
    toggler.addEventListener('click', function() {
      buttonOpen.removeAttribute('hidden', 'hidden');
    });
  });
}

    