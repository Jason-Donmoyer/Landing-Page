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


const mainContent = document.getElementById('main-content');


// Get content onto page

navLinks.forEach((item) => {
  console.log(item.id);
  let newListItem = document.createElement('li');
  let listItemLink = document.createElement('a');
  listItemLink.setAttribute('href', '#');
  listItemLink.innerHTML = item.title;
  console.log(listItemLink.id);

  newListItem.appendChild(listItemLink);
  mainNavArea.appendChild(newListItem);

  let flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  let newContent = document.createElement('p');
  let newContentHeader = document.createElement('h2');
  newContentHeader.innerHTML = item.title;
  newContent.textContent = item.content;
  flexContainer.appendChild(newContentHeader);
  flexContainer.appendChild(newContent);
  mainContent.appendChild(flexContainer);
});