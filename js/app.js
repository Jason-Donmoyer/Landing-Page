// dummy content
const navContent = [{
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

// Variables

const header = document.querySelector('header');
const mainNavArea = document.querySelector('#main-nav-list');
const nav = document.querySelector('nav');
const mainContent = document.getElementById('main-content');
const hamburgerMenu = document.getElementById('hamburger-menu');



// Get content onto page

// Loops through object array and creates content of page

navContent.forEach((item) => {
  createNavLink(item);
  createContent(item);
});

const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('#main-nav-list li a');


for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].removeAttribute('tabindex', i);
}


navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault;
    // e.target.parentElement.style.backgroundColor = 'var(--dark-blue)';
    let scrollOptions = {
      top: navLink.href,
      behavior: 'smooth',
    }
    window.scrollTo(scrollOptions);
    // console.log(navLink.href);
  });
});



// Adds tabindex to flex containers for active and focus states

const flexContainers = document.querySelectorAll('.flex-container');


for (let i = 0; i < flexContainers.length; i++) {
  flexContainers[i].setAttribute('tabindex', i);
}

// Check to see if content sections are in viewport

document.addEventListener('scroll', () => {
  for (let i = 0; i < flexContainers.length; i++) {
    let ele = flexContainers[i];
    elementInViewport(ele);
  }
});


// Hamburger Menu Event Listener
// Shows and hides nav menu on mobile devices

hamburgerMenu.addEventListener('click', () => {
  nav.style.display === 'flex' ? nav.style.display = 'none' : nav.style.display = 'flex';
});

// SECTION TO HIDE NAV ON CLICK ON MOBILE DEVICES
// Work in progress

// FUNCTIONS

// Creates new nav menu link

function createNavLink(item) {
  let newListItem = document.createElement('li');
  newListItem.classList.add('nav-item');
  let listItemLink = document.createElement('a');
  listItemLink.classList.add('nav-link');
  listItemLink.href = '#' + item.id;
  listItemLink.innerHTML = item.title;

  newListItem.appendChild(listItemLink);
  mainNavArea.appendChild(newListItem);
}

// Creates new content div

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

// Actions for content in focus/active state

function elementInViewport(myElement) {

  var bounding = myElement.getBoundingClientRect();

  if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    for (let i = 0; i < navLinks.length; i++) {
      let thisLink = `#${myElement.id}`;
      if (navLinks[i].getAttribute('href') === thisLink) {
        console.log(thisLink);
        navLinks[i].parentElement.style.backgroundColor = 'var(--dark-blue)';
      } else {
        navLinks[i].parentElement.style.backgroundColor = 'var(--light-blue)';
      }
    }
  } else {
    myElement.style.color = 'black';
  }
}