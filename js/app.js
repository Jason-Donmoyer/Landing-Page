// dummy content
const navLinks = [{
    id: 'section1',
    title: 'Section One',
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex enim repudiandae saepe eos laudantium quibusdam aspernatur similique porro maxime excepturi quidem fuga voluptatibus, quos magni facilis quam nulla nemo. Animi quis a cum inventore fugiat molestias est pariatur illum!'
  },
  {
    id: 'section2',
    title: 'Section Two',
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex enim repudiandae saepe eos laudantium quibusdam aspernatur similique porro maxime excepturi quidem fuga voluptatibus, quos magni facilis quam nulla nemo. Animi quis a cum inventore fugiat molestias est pariatur illum!'
  },
  {
    id: 'section3',
    title: 'Section Three',
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex enim repudiandae saepe eos laudantium quibusdam aspernatur similique porro maxime excepturi quidem fuga voluptatibus, quos magni facilis quam nulla nemo. Animi quis a cum inventore fugiat molestias est pariatur illum!'
  },
  {
    id: 'section4',
    title: 'Section Four',
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex enim repudiandae saepe eos laudantium quibusdam aspernatur similique porro maxime excepturi quidem fuga voluptatibus, quos magni facilis quam nulla nemo. Animi quis a cum inventore fugiat molestias est pariatur illum!'
  }
];

const mainNavArea = document.querySelector('#main-nav-list');
const nav = document.querySelector('nav');
const mainContent = document.getElementById('main-content');
const hamburgerMenu = document.getElementById('hamburger-menu');


// Get content onto page

// Loops through object array and creates content of page

navLinks.forEach((item) => {
  console.log(typeof item.id);
  let newListItem = document.createElement('li');
  let listItemLink = document.createElement('a');
  listItemLink.href = '#' + item.id;
  console.log(listItemLink.href);
  listItemLink.innerHTML = item.title;
  console.log(listItemLink.id);

  // Creates new nav link

  newListItem.appendChild(listItemLink);
  mainNavArea.appendChild(newListItem);

  // Creates new content div

  let flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  flexContainer.setAttribute('id', item.id);
  let newContent = document.createElement('p');
  let newContentHeader = document.createElement('h2');
  newContentHeader.innerHTML = item.title;
  newContent.textContent = item.content;
  flexContainer.appendChild(newContentHeader);
  flexContainer.appendChild(newContent);
  mainContent.appendChild(flexContainer);
});

// Hamburger Menu Event Listener
// Shows and hides nav menu on mobile devices

hamburgerMenu.addEventListener('click', () => {
  nav.style.display === 'flex' ? nav.style.display = 'none' : nav.style.display = 'flex';
});