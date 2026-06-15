const projects = {

  "limelight": {
    title: "Limelight",
    year: "2026",
    description: "36 x 48 in. Acrylic and oil on canvas",
    images: [
      "images/limelight.jpg"
    ]
  },

  "sunbleached-pool-chairs": {
    title: "Sunbleached Pool Chairs",
    year: "2026",
    description: "36 x 40 in. Acrylic on canvas",
    images: [
      "images/sunbleached-pool-chairs.jpg"
    ]
  },

  "heirloom": {
    title: "Heirloom Up For Grabs",
    year: "2025",
    description: "Acrylic, oil, and monoprint on discarded headboard\n\n\"Heirloom Up for Grabs\" considers inheritance and generational cycles and loops through representations of crochet. Crochet as a practice has been passed down from my grandmother to my mother to myself, a creative link that bonds us. A discarded headboard stands in a fictive bedroom, a domestic space, a traditional space. Drawing focus to a blanket created by my own mother, I reimagined her piece through paint, tenderly acknowledging the comfort her art--and love--brings, despite the discomfort my queerness causes my family, addressed through the phrase, \"I'm sorry I can bring you no comfort.\" Vibrant hues push against the rigid edges and compartments of the headboard, and white lace starkly cuts through a deep blue background, interrupted by gestural brushstrokes. The vivid, succulent depiction of the blanket contrasts the restricting, repetitive side of tradition.",
    images: [
      "images/heirloom-up-for-grabs.JPG",
      "images/heirloom1.jpg",
      "images/heirloom2.jpg"
    ]
  },

  "frame-of-reference": {
    title: "Frame of Reference",
    year: "2025",
    description: "24 x 30 in, oil on canvas\n\nAmidst the fluorescent glow of girlhood in the rolling hills of Missouri wine country, crouching with my grandmother in forest tree forts and letting her ashes pass through my fingers… a mirage stalls the moment. It was there then, in my fondest memories, and it's here now, the burning weight of the mirror, the screen, the scale. A frame of reference I've inherited beckons one to look, to judge, and to compare. This frame of reference can be grounding, if only burned into the retinas. otherwise, the blurring imperfections (inevitable) create such an overcoming feeling of instability and flux. Surrendering comfortability, you will find that the wind moving through the grass and the varying nature of the current will carry you along just fine.\n\nI am sorry I can bring you no comfort. It hurts to grow. I can testify to that pain as my legs ached with each centimeter they stretched. And you called me LL, short for long legs, shortening me to my best part. I still run, in a way at odds with my nature and yours and as I do I trip over my own feet, the crisscrossing bricks, and the tree trunks uprooting them.",
    images: [
      "images/frame-of-reference.jpg"
    ]
  },

  "it-will-grow-back": {
    title: "It Will Grow Back",
    year: "2025",
    description: "Triptych of 3 24\" x 30\" screen prints\n\nMy banana tree in Richmond and poppies growing in St. Louis, using color to evoke contrasting image associations.",
    images: [
      "images/it-will-grow-back.jpg",
      "images/IWGBduo.jpg",
      "images/IWGBgreen.jpg",
      "images/IWGBred.jpg"
    ]
  },

  "maybe-i-should-thank-you": {
    title: "Maybe I Should Thank You",
    year: "2025",
    description: "9\" x 12\", 18\" x 24\" screenprints with experimental flooding and monoprinted layers",
    images: [
      "images/misty_6.jpg",
      "images/misty2.jpg",
      "images/misty5.JPG",
      "images/misty7.JPG",
      "images/misty8.JPG"
    ]
  },

  "unwinding": {
    title: "Unwinding",
    year: "2025",
    description: "Screenprinted diptych, 2 11\" x 14\" prints\n\nExploring color transparency, depicting spirals of thought and the unwinding of confining beliefs.",
    images: [
      "images/unwinding.jpg"
    ]
  },


  "summer-litany": {
    title: "Summer Litany",
    year: "2024",
    description: "9 5 x 9 in. monoprints Following the feelings that arose from watching my grandmother’s psychological decline due to dementia, I created a series of monoprints. Within them, a poem, describing a memory of a beautiful night in my backyard is fractured and concealed but never fully accessible, just like a memory blurring and receding. Mark-making grounds the images in a physical reality which remains unclouded by the obsessions and contortions of the mind, and monoprint as a medium emphasizes the seriality of obsessive thought patterns. Through these images, I grieve the inevitable loss that results from the fragility of memory.",
    images: [
      "images/summer-litany.jpg"
    ]
  },


  
  // ADD MORE PROJECTS HERE

};


const homePage    = document.getElementById('home-page');
const bioPage     = document.getElementById('bio-page');
const projectPage = document.getElementById('project-page');

function showPage(page) {
  [homePage, bioPage, projectPage].forEach(p => p.classList.remove('active'));
  page.classList.add('active');
  window.scrollTo(0, 0);
}

document.getElementById('project-grid').addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const id = card.dataset.project;
  const data = projects[id];
  if (!data) return;

  document.getElementById('project-title').textContent = data.title;
  document.getElementById('project-year-display').textContent = data.year;
  document.getElementById('project-description').textContent = data.description;

  const imgContainer = document.getElementById('project-images');
  imgContainer.innerHTML = '';
  data.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    imgContainer.appendChild(img);
  });

  showPage(projectPage);
});

document.getElementById('name-link').addEventListener('click', e => {
  e.preventDefault();
  showPage(bioPage);
});

document.getElementById('bio-back-link').addEventListener('click', e => {
  e.preventDefault();
  showPage(homePage);
});

document.getElementById('project-back-link').addEventListener('click', e => {
  e.preventDefault();
  showPage(homePage);
});