let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


function openmenu(){
    document.getElementById('sidemenu').style.right = "0";
}

function closemenu(){
    document.getElementById('sidemenu').style.right = "-150px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbx-o9oxptcdEcaauth-AJ53RU6AkX_ExAW_7VYikzQvvQDD5uz6vq8xLHS-fzDxsiRk/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })