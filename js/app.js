// dummy content
const navLinks = [{
    id: 'section1',
    title: 'Section One',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat iusto a pariatur ut tempora cumque maiores quo neque facere. Hic at, reiciendis placeat esse neque voluptas quaerat architecto facere recusandae asperiores voluptate reprehenderit excepturi optio quas quisquam voluptatum animi dolorum dolores eligendi fuga vero rerum. Numquam debitis assumenda iusto facilis expedita, est sit? Debitis eaque aliquid unde, voluptatibus, tenetur eos voluptatem suscipit, sint officia accusamus veniam optio quis nihil. Sequi non, doloremque sed, laborum corrupti porro perspiciatis omnis impedit consequatur ab, dolorum ad? Hic corrupti pariatur minima ducimus nostrum. Maxime laudantium, voluptate quasi magni est voluptatem ipsa deleniti culpa aperiam architecto. Omnis, fuga harum. Magni aliquam sequi, molestias quam ipsam nam reprehenderit necessitatibus optio dolorem nemo debitis, blanditiis aut! Facere iure doloremque dignissimos mollitia aliquam magni enim eos similique magnam modi repellendus accusantium ipsa voluptatem fugit possimus itaque tempora accusamus veniam ipsam eaque, quisquam illo incidunt nemo odit! A?'
  },
  {
    id: 'section2',
    title: 'Section Two',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat iusto a pariatur ut tempora cumque maiores quo neque facere. Hic at, reiciendis placeat esse neque voluptas quaerat architecto facere recusandae asperiores voluptate reprehenderit excepturi optio quas quisquam voluptatum animi dolorum dolores eligendi fuga vero rerum. Numquam debitis assumenda iusto facilis expedita, est sit? Debitis eaque aliquid unde, voluptatibus, tenetur eos voluptatem suscipit, sint officia accusamus veniam optio quis nihil. Sequi non, doloremque sed, laborum corrupti porro perspiciatis omnis impedit consequatur ab, dolorum ad? Hic corrupti pariatur minima ducimus nostrum. Maxime laudantium, voluptate quasi magni est voluptatem ipsa deleniti culpa aperiam architecto. Omnis, fuga harum. Magni aliquam sequi, molestias quam ipsam nam reprehenderit necessitatibus optio dolorem nemo debitis, blanditiis aut! Facere iure doloremque dignissimos mollitia aliquam magni enim eos similique magnam modi repellendus accusantium ipsa voluptatem fugit possimus itaque tempora accusamus veniam ipsam eaque, quisquam illo incidunt nemo odit! A?'
  },
  {
    id: 'section3',
    title: 'Section Three',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat iusto a pariatur ut tempora cumque maiores quo neque facere. Hic at, reiciendis placeat esse neque voluptas quaerat architecto facere recusandae asperiores voluptate reprehenderit excepturi optio quas quisquam voluptatum animi dolorum dolores eligendi fuga vero rerum. Numquam debitis assumenda iusto facilis expedita, est sit? Debitis eaque aliquid unde, voluptatibus, tenetur eos voluptatem suscipit, sint officia accusamus veniam optio quis nihil. Sequi non, doloremque sed, laborum corrupti porro perspiciatis omnis impedit consequatur ab, dolorum ad? Hic corrupti pariatur minima ducimus nostrum. Maxime laudantium, voluptate quasi magni est voluptatem ipsa deleniti culpa aperiam architecto. Omnis, fuga harum. Magni aliquam sequi, molestias quam ipsam nam reprehenderit necessitatibus optio dolorem nemo debitis, blanditiis aut! Facere iure doloremque dignissimos mollitia aliquam magni enim eos similique magnam modi repellendus accusantium ipsa voluptatem fugit possimus itaque tempora accusamus veniam ipsam eaque, quisquam illo incidunt nemo odit! A?'
  },
  {
    id: 'section4',
    title: 'Section Four',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat iusto a pariatur ut tempora cumque maiores quo neque facere. Hic at, reiciendis placeat esse neque voluptas quaerat architecto facere recusandae asperiores voluptate reprehenderit excepturi optio quas quisquam voluptatum animi dolorum dolores eligendi fuga vero rerum. Numquam debitis assumenda iusto facilis expedita, est sit? Debitis eaque aliquid unde, voluptatibus, tenetur eos voluptatem suscipit, sint officia accusamus veniam optio quis nihil. Sequi non, doloremque sed, laborum corrupti porro perspiciatis omnis impedit consequatur ab, dolorum ad? Hic corrupti pariatur minima ducimus nostrum. Maxime laudantium, voluptate quasi magni est voluptatem ipsa deleniti culpa aperiam architecto. Omnis, fuga harum. Magni aliquam sequi, molestias quam ipsam nam reprehenderit necessitatibus optio dolorem nemo debitis, blanditiis aut! Facere iure doloremque dignissimos mollitia aliquam magni enim eos similique magnam modi repellendus accusantium ipsa voluptatem fugit possimus itaque tempora accusamus veniam ipsam eaque, quisquam illo incidunt nemo odit! A?'
  }
];

const mainNavArea = document.querySelector('#main-nav-list');
const nav = document.querySelector('nav');
const mainContent = document.getElementById('main-content');
const hamburgerMenu = document.getElementById('hamburger-menu');


// Get content onto page

// Loops through object array and creates content of page



navLinks.forEach((item) => {
  createNavLink(item);
  createContent(item);

  // console.log(typeof item.id);
  // let newListItem = document.createElement('li');
  // let listItemLink = document.createElement('a');
  // listItemLink.href = '#' + item.id;
  // console.log(listItemLink.href);
  // listItemLink.innerHTML = item.title;
  // console.log(listItemLink.id);

  // Creates new nav link

  // newListItem.appendChild(listItemLink);
  // mainNavArea.appendChild(newListItem);

  // Creates new content div


  // let flexContainer = document.createElement('div');
  // flexContainer.classList.add('flex-container');
  // flexContainer.setAttribute('id', item.id);
  // let newContent = document.createElement('p');
  // let newContentHeader = document.createElement('h2');
  // newContentHeader.innerHTML = item.title;
  // newContent.textContent = item.content;
  // flexContainer.appendChild(newContentHeader);
  // flexContainer.appendChild(newContent);
  // mainContent.appendChild(flexContainer);
});

// Hamburger Menu Event Listener
// Shows and hides nav menu on mobile devices

hamburgerMenu.addEventListener('click', () => {
  nav.style.display === 'flex' ? nav.style.display = 'none' : nav.style.display = 'flex';
});

// Adds tabindex to flex containers for active and focus states

const flexContainers = document.querySelectorAll('.flex-container');

for (let i = 0; i < flexContainers.length; i++) {
  flexContainers[i].setAttribute('tabindex', i);
}

function createNavLink(item) {
  let newListItem = document.createElement('li');
  let listItemLink = document.createElement('a');
  listItemLink.href = '#' + item.id;
  listItemLink.innerHTML = item.title;

  newListItem.appendChild(listItemLink);
  mainNavArea.appendChild(newListItem);
}

function createContent(item) {
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
}