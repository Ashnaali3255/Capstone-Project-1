const featured = [
    {
      image: './images/ermi_480.jpg',
      listTitle: 'Ermias Teshome',
      subTitle: 'Vice President of Engineering for Google',
      para: 'He is the Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    },
    {
      image: './images/gedi_480.jpg',
      listTitle: 'Gedion Tarekegn',
      subTitle: 'Director of Engineering for Google',
      para: 'He co-authored several software patents and was a specialist in enterprise software.',
    },
    {
      image: './images/sami_480.jpg',
      listTitle: 'Samuel Zerihun',
      subTitle: 'Coordinator of Engineering for Google',
      para: 'He co-authored several software patents and was a specialist in enterprise software.',
    },
    {
      image: './images/edi_480.jpg',
      listTitle: 'Eden Teshome',
      subTitle: 'Graphic-Designer of Engineering for Google',
      para: 'She co-authored several software patents and was a specialist in enterprise software.',
    },
    {
      image: './images/fevi_480.jpg',
      listTitle: 'Feven Masresha',
      subTitle: 'Organizer of Engineering for Google',
      para: 'She co-authored several software patents and was a specialist in enterprise software.',
    },
    {
      image: './images/dagi_480.jpg',
      listTitle: 'Dagimawit Sitotaw',
      subTitle: 'Team Leader of Engineering for Google ',
      para: 'She co-authored several software patents and was a specialist in enterprise software.',
    },
  ];
  
  // Create Elements and store them in a variables.
  const sectionFeature = document.getElementById('featured-page');
  const container = document.createElement('div');
  container.className = 'featured-container';
  const heading = document.createElement('h2');
  const line = document.createElement('hr');
  heading.className = 'featured-title';
  heading.textContent = 'Featured Speakers';
  const unOrderedList = document.createElement('ul');
  unOrderedList.className = 'featured-group';
  const listOne = document.createElement('li');
  listOne.className = 'featured-item-1';
  const listTwo = document.createElement('li');
  listTwo.className = 'featured-item-2';
  const btnLess = document.createElement('button');
  btnLess.className = 'featured-btn btn-1';
  btnLess.textContent = 'Less';
  btnLess.type = 'button';
  const btn = document.createElement('button');
  btn.textContent = 'More';
  btn.className = 'featured-btn';
  btn.type = 'button';
  
  // adding features dynamically using forloop fot the mobile part
  for (let i = 0; i <= 2; i += 1) {
    const mobile = window.matchMedia('(max-width: 768px)');
    if (i === 2 && mobile.matches) {
      listOne.innerHTML += `<div class="featured-item last-featured">
        <div class="featured-img">
                  <img src="${featured[i].image}" alt="img" />
                  </div>
                  <div class="featured-content">
                  <h2>${featured[i].listTitle}</h2>
                  <h3>${featured[i].subTitle}</h3>
                  <hr />
                  <p>${featured[i].para}
                  </p>
                  </div>
                  </div>`;
    } else {
      listOne.innerHTML += `<div class="featured-item">
    <div class="featured-img">
              <img src="${featured[i].image}" alt="img" />
              </div>
              <div class="featured-content">
              <h2>${featured[i].listTitle}</h2>
              <h3>${featured[i].subTitle}</h3>
              <hr />
              <p>${featured[i].para}
              </p>
              </div>
              </div>`;
    }
  }

  // adding features dynamically using forloop fot the desktop part
  for (let i = 3; i < featured.length; i += 1) {
    listTwo.innerHTML += `<div class="featured-item">
    <div class="featured-img">
              <img src="${featured[i].image}" alt="img" />
              </div>
              <div class="featured-content">
              <h2>${featured[i].listTitle}</h2>
              <h3>${featured[i].subTitle}</h3>
              <hr />
              <p>${featured[i].para}
              </p>
              </div>
              </div>`;
  }
  
  // Add event listener for the less button
  btn.addEventListener('click', () => {
    btn.style.display = 'none';
    listOne.style.height = '100vh'.background;
    listOne.style.background = '#fff';
    listOne.style.backdropFilter = 'blur(6px)';
    for (let i = 2; i < featured.length; i += 1) {
      if (i === featured.length - 1) {
        listOne.innerHTML += `<div class="featured-item">
    <div class="featured-img">
              <img src="${featured[i].image}" alt="img" />
              </div>
              <div class="featured-content">
              <h2>${featured[i].listTitle}</h2>
              <h3>${featured[i].subTitle}</h3>
              <hr />
              <p>${featured[i].para}
              </p>
              </div>
              </div>
              `;
        listOne.appendChild(btnLess);
        btnLess.style.display = 'block';
      } else {
        listOne.innerHTML += `<div class="featured-item">
    <div class="featured-img">
              <img src="${featured[i].image}" alt="img" />
              </div>
              <div class="featured-content">
              <h2>${featured[i].listTitle}</h2>
              <h3>${featured[i].subTitle}</h3>
              <hr />
              <p>${featured[i].para}
              </p>
              </div>
              </div>
              `;
      }
    }
  });

  // Add event listener for the less button
  btnLess.addEventListener('click', () => {
    btn.style.display = 'block';
    listOne.innerHTML = '';
    for (let i = 0; i < 2; i += 1) {
      listOne.innerHTML += `<div class="featured-item">
    <div class="featured-img">
              <img src="${featured[i].image}" alt="img" />
              </div>
              <div class="featured-content">
              <h2>${featured[i].listTitle}</h2>
              <h3>${featured[i].subTitle}</h3>
              <hr />
              <p>${featured[i].para}
              </p>
              </div>
              </div>`;
    }
    listOne.appendChild(btn);
    btnLess.style.display = 'none';
  });
  // appending new elements
  container.appendChild(heading);
  container.appendChild(line);
  listOne.appendChild(btn);
  unOrderedList.appendChild(listOne);
  unOrderedList.appendChild(listTwo);
  container.appendChild(unOrderedList);
  sectionFeature.appendChild(container);