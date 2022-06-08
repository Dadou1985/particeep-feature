const movies = [
    {
      id: '1',
      img: "https://m.media-amazon.com/images/I/711VQcNMkvL._AC_SL1500_.jpg",
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      img: "https://images-na.ssl-images-amazon.com/images/I/71-J6giZEQL.jpg",
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      img: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      img: "https://www.cine-feuilles.ch/storage/app/uploads/public/5b2/bb3/d2c/5b2bb3d2ca8bf408894463.jpg",
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      img: "https://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg",
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      img: "https://image.posterlounge.be/images/l/1895909.jpg",
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      img: "https://image.posterlounge.be/images/l/1895909.jpg",
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg",
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      img: "https://m.media-amazon.com/images/I/912AErFSBHL._AC_SY445_.jpg",
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      img: "https://fr.web.img5.acsta.net/pictures/14/09/11/17/05/508784.jpg",
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))