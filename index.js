const scrollElement = document.querySelector('.scroll');
const navigation = document.querySelector('.navigation');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.menu-close');
const navLinks = document.querySelectorAll('.mobile-nav a');
const moreButton = document.getElementById('moreButton');
const speakersDetailsContainer = document.getElementById('speakersDetails');

function openMobileMenu() {
  mobileMenu.style.left = '0';
}

function closeMobileMenu() {
  mobileMenu.style.left = '-100%';
}

hamburger.addEventListener('click', openMobileMenu);
menuClose.addEventListener('click', closeMobileMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

function checkWindowSize() {
  const isDesktopView = window.matchMedia('(min-width: 768px)').matches;
  if (isDesktopView) {
    closeMobileMenu();
  }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);

window.addEventListener('scroll', () => {
  const isMobileView = window.innerWidth < 768;

  if (isMobileView) {
    if (window.scrollY > scrollElement.offsetTop) {
      scrollElement.classList.add('fixed');
    } else {
      scrollElement.classList.remove('fixed');
    }
  } else if (window.scrollY > navigation.offsetTop) {
    navigation.classList.add('fixed');
  } else {
    navigation.classList.remove('fixed');
  }
});

const speakersData = [
  {
    image: './images/speakers/speakerOne.png',
    name: 'Dr. Sarah Reynolds',
    title: 'AI Visionary',
    description: 'Pioneer of Ethical AI, Dr. Reynolds reshapes the tech landscape through responsible and transformative AI applications.',
  },
  {
    image: './images/speakers/speakerTwo.png',
    name: 'John Davis',
    title: 'Blockchain Innovator and Thought Leader',
    description: "Founder of CryptoLabs, John Davis drives decentralized innovation, pushing the boundaries of blockchain's potential.",
  },
  {
    image: './images/speakers/speakerThree.png',
    name: 'Emily Chen',
    title: 'Biotechnology Trailblazer and Healthcare Visionary',
    description: "A catalyst in the biotech revolution, Emily Chen's breakthroughs are shaping the future of healthcare.",
  },
  {
    image: './images/speakers/speakerFour.png',
    name: 'Julia Ramirez',
    title: 'Virtual Reality Visionary and Immersive Experience Architect',
    description: 'Julia Ramirez leads the charge in creating immersive virtual experiences, transforming how we interact with technology.',
  },
  {
    image: './images/speakers/speakerFive.png',
    name: 'Alexandra Martin',
    title: 'Coding Guru and Tech Education Advocate',
    description: 'Coding prodigy Alexandra Martin shares her insights into the world of programming, inspiring the next generation of coders.',
  },
  {
    image: './images/speakers/speakerSix.png',
    name: 'Michael Carter',
    title: 'Tech Futurist and Futurology Evangelist',
    description: "Michael Carter's captivating visions of the future drive conversations about the convergence of technology and humanity.",
  },

];

function generateSpeakerCard(speaker) {
  return `
    <div class="speaker">
      <img src="${speaker.image}" alt="${speaker.name}" class="speaker-img" />
      <div class="speaker-info">
        <h2 class="speaker-name">${speaker.name}</h2>
        <h3 class="speaker-title">${speaker.title}</h3>
        <div class="speaker-border"></div>
        <p class="speaker-description">${speaker.description}</p>
      </div>
    </div>
  `;
}

function appendSpeakersToContainer(speakers) {
  const speakersContainer = document.querySelector('.speakers-details');
  speakersContainer.innerHTML = '';
  speakers.forEach((speaker) => {
    const speakerCard = generateSpeakerCard(speaker);
    speakersContainer.insertAdjacentHTML('beforeend', speakerCard);
  });
}

function toggleSpeakersVisibility() {
  speakersDetailsContainer.classList.toggle('expanded');
  moreButton.innerHTML = speakersDetailsContainer.classList.contains('expanded') ? 'Less' : 'More';
}

function updateSpeakerDisplay() {
  const isMobile = window.innerWidth < 768;

  if (isMobile && speakersDetailsContainer.classList.contains('expanded')) {
    appendSpeakersToContainer(speakersData);
  } else if (isMobile) {
    appendSpeakersToContainer(speakersData.slice(0, 2));
  } else {
    appendSpeakersToContainer(speakersData);
  }
}

moreButton.addEventListener('click', () => {
  toggleSpeakersVisibility();
  updateSpeakerDisplay();
});

window.addEventListener('resize', () => {
  updateSpeakerDisplay();
});

updateSpeakerDisplay();
