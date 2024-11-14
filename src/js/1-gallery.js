const gallery = document.querySelector('.gallery');

const images = [
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    alt: 'Hokkaido Flower',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    alt: 'Container Haulage Freight',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    alt: 'Aerial Beach View',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    alt: 'Flower Blooms',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    alt: 'Alpine Mountains',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    alt: 'Mountain Lake Sailing',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
];

images.forEach(image => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  li.append(img);
  gallery.append(li);
});

new SimpleLightbox('.gallery a', {
  overlay: true,
  captions: true,
  nav: true,
  close: true,
});
