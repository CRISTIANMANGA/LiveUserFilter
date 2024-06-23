const data = [
    { "name_full": "Vernon Lucas", "description": "Soy una buena persona", "avatar": "https://randomuser.me/api/portraits/men/1.jpg", "id": "1" },

    { "name_full": "Zhadana Bilanyuk", "description": "Soy inteligente", "avatar": "https://randomuser.me/api/portraits/women/1.jpg", "id": "2" },
    { "name_full": "Julia Martínez", "description": "Amante de los animales", "avatar": "https://randomuser.me/api/portraits/women/2.jpg", "id": "3" },
    { "name_full": "Carlos Méndez", "description": "Aficionado al deporte", "avatar": "https://randomuser.me/api/portraits/men/2.jpg", "id": "4" },
    { "name_full": "Lucía García", "description": "Me encanta la lectura", "avatar": "https://randomuser.me/api/portraits/women/3.jpg", "id": "5" },
    { "name_full": "Juan Pérez", "description": "Fanático del cine", "avatar": "https://randomuser.me/api/portraits/men/3.jpg", "id": "6" },
    { "name_full": "Ana López", "description": "Apasionada por la música", "avatar": "https://randomuser.me/api/portraits/women/4.jpg", "id": "7" },
    { "name_full": "Miguel Torres", "description": "Gusto por la tecnología", "avatar": "https://randomuser.me/api/portraits/men/4.jpg", "id": "8" },
    { "name_full": "María Hernández", "description": "Amante de la naturaleza", "avatar": "https://randomuser.me/api/portraits/women/5.jpg", "id": "9" },
    { "name_full": "Luis Sánchez", "description": "Aficionado a los videojuegos", "avatar": "https://randomuser.me/api/portraits/men/5.jpg", "id": "10" },
    { "name_full": "Isabel Ruiz", "description": "Entusiasta de la fotografía", "avatar": "https://randomuser.me/api/portraits/women/6.jpg", "id": "11" },
    { "name_full": "Pablo Díaz", "description": "Me gusta viajar", "avatar": "https://randomuser.me/api/portraits/men/6.jpg", "id": "12" },
    { "name_full": "Carmen Fernández", "description": "Fan de la cocina", "avatar": "https://randomuser.me/api/portraits/women/7.jpg", "id": "13" },
    { "name_full": "José Ramírez", "description": "Apasionado por el arte", "avatar": "https://randomuser.me/api/portraits/men/7.jpg", "id": "14" },
    { "name_full": "Laura Moreno", "description": "Gusto por la moda", "avatar": "https://randomuser.me/api/portraits/women/8.jpg", "id": "15" },
    { "name_full": "Francisco Gómez", "description": "Fanático del fútbol", "avatar": "https://randomuser.me/api/portraits/men/8.jpg", "id": "16" },
    { "name_full": "Marta Castillo", "description": "Me encanta bailar", "avatar": "https://randomuser.me/api/portraits/women/9.jpg", "id": "17" },
    { "name_full": "Santiago Ortega", "description": "Aficionado a la historia", "avatar": "https://randomuser.me/api/portraits/men/9.jpg", "id": "18" },
    { "name_full": "Claudia Gil", "description": "Amante del yoga", "avatar": "https://randomuser.me/api/portraits/women/10.jpg", "id": "19" },
    { "name_full": "Javier Navarro", "description": "Entusiasta de la ciencia", "avatar": "https://randomuser.me/api/portraits/men/10.jpg", "id": "20" },
    { "name_full": "Raquel Domínguez", "description": "Me gusta el teatro", "avatar": "https://randomuser.me/api/portraits/women/11.jpg", "id": "21" },
    { "name_full": "Andrés Flores", "description": "Apasionado de los coches", "avatar": "https://randomuser.me/api/portraits/men/11.jpg", "id": "22" },
    { "name_full": "Eva Sánchez", "description": "Aficionada a la pintura", "avatar": "https://randomuser.me/api/portraits/women/12.jpg", "id": "23" },
    { "name_full": "Diego Martínez", "description": "Fan de la naturaleza", "avatar": "https://randomuser.me/api/portraits/men/12.jpg", "id": "24" },
    { "name_full": "Lorena Gómez", "description": "Me encanta la moda", "avatar": "https://randomuser.me/api/portraits/women/13.jpg", "id": "25" },
    { "name_full": "Daniel Muñoz", "description": "Amante de la tecnología", "avatar": "https://randomuser.me/api/portraits/men/13.jpg", "id": "26" },
    { "name_full": "Patricia Rodríguez", "description": "Fanática de los libros", "avatar": "https://randomuser.me/api/portraits/women/14.jpg", "id": "27" },
    { "name_full": "Víctor Ruiz", "description": "Aficionado a la música", "avatar": "https://randomuser.me/api/portraits/men/14.jpg", "id": "28" },
    { "name_full": "Natalia López", "description": "Apasionada por el cine", "avatar": "https://randomuser.me/api/portraits/women/15.jpg", "id": "29" },
    { "name_full": "Hugo Pérez", "description": "Entusiasta de los deportes", "avatar": "https://randomuser.me/api/portraits/men/15.jpg", "id": "30" },
    { "name_full": "Rocío González", "description": "Me gusta la fotografía", "avatar": "https://randomuser.me/api/portraits/women/16.jpg", "id": "31" },
    { "name_full": "Manuel Jiménez", "description": "Aficionado a los videojuegos", "avatar": "https://randomuser.me/api/portraits/men/16.jpg", "id": "32" },
    { "name_full": "Cristina Sánchez", "description": "Amante de los viajes", "avatar": "https://randomuser.me/api/portraits/women/17.jpg", "id": "33" },
    { "name_full": "Adrián Navarro", "description": "Fan de la cocina", "avatar": "https://randomuser.me/api/portraits/men/17.jpg", "id": "34" },
    { "name_full": "Elena Fernández", "description": "Apasionada por el arte", "avatar": "https://randomuser.me/api/portraits/women/18.jpg", "id": "35" },
    { "name_full": "Mario Castro", "description": "Entusiasta de la tecnología", "avatar": "https://randomuser.me/api/portraits/men/18.jpg", "id": "36" },
    { "name_full": "Paula Rodríguez", "description": "Amante de los animales", "avatar": "https://randomuser.me/api/portraits/women/19.jpg", "id": "37" },
    { "name_full": "Álvaro Morales", "description": "Me encanta el deporte", "avatar": "https://randomuser.me/api/portraits/men/19.jpg", "id": "38" },
    { "name_full": "Sofía Romero", "description": "Fanática de la lectura", "avatar": "https://randomuser.me/api/portraits/women/20.jpg", "id": "39" },
    { "name_full": "Ignacio Ortiz", "description": "Amante del cine", "avatar": "https://randomuser.me/api/portraits/men/20.jpg", "id": "40" },
    { "name_full": "Clara Sánchez", "description": "Aficionada a la música", "avatar": "https://randomuser.me/api/portraits/women/21.jpg", "id": "41" },
    { "name_full": "David Pérez", "description": "Me gusta la tecnología", "avatar": "https://randomuser.me/api/portraits/men/21.jpg", "id": "42" },
    { "name_full": "Alicia Fernández", "description": "Apasionada por los viajes", "avatar": "https://randomuser.me/api/portraits/women/22.jpg", "id": "43" },
    { "name_full": "Tomás Ramírez", "description": "Entusiasta de la ciencia", "avatar": "https://randomuser.me/api/portraits/men/22.jpg", "id": "44" },
    { "name_full": "Beatriz González", "description": "Me encanta bailar", "avatar": "https://randomuser.me/api/portraits/women/23.jpg", "id": "45" },
    { "name_full": "Federico Torres", "description": "Aficionado a la historia", "avatar": "https://randomuser.me/api/portraits/men/23.jpg", "id": "46" },
    { "name_full": "Rosa Moreno", "description": "Amante del yoga", "avatar": "https://randomuser.me/api/portraits/women/24.jpg", "id": "47" },
    { "name_full": "Julio Navarro", "description": "Entusiasta de la ciencia", "avatar": "https://randomuser.me/api/portraits/men/24.jpg", "id": "48" },
    { "name_full": "Gabriela Díaz", "description": "Me gusta el teatro", "avatar": "https://randomuser.me/api/portraits/women/25.jpg", "id": "49" },
    { "name_full": "Oscar Torres", "description": "Apasionado de los coches", "avatar": "https://randomuser.me/api/portraits/men/25.jpg", "id": "50" },
    { "name_full": "Vanessa Morales", "description": "Aficionada a la pintura", "avatar": "https://randomuser.me/api/portraits/women/26.jpg", "id": "51" },
    { "name_full": "Raúl García", "description": "Fan de la naturaleza", "avatar": "https://randomuser.me/api/portraits/men/26.jpg", "id": "52" },
    { "name_full": "Elisa Rodríguez", "description": "Me encanta la moda", "avatar": "https://randomuser.me/api/portraits/women/27.jpg", "id": "53" },
    { "name_full": "Luis Ramírez", "description": "Amante de la tecnología", "avatar": "https://randomuser.me/api/portraits/men/27.jpg", "id": "54" },
    { "name_full": "Verónica López", "description": "Fanática de los libros", "avatar": "https://randomuser.me/api/portraits/women/28.jpg", "id": "55" },
    { "name_full": "Ernesto Sánchez", "description": "Aficionado a la música", "avatar": "https://randomuser.me/api/portraits/men/28.jpg", "id": "56" },
    { "name_full": "Mónica Torres", "description": "Apasionada por el cine", "avatar": "https://randomuser.me/api/portraits/women/29.jpg", "id": "57" },
    { "name_full": "Eduardo Morales", "description": "Entusiasta de los deportes", "avatar": "https://randomuser.me/api/portraits/men/29.jpg", "id": "58" },
    { "name_full": "Cecilia Navarro", "description": "Me gusta la fotografía", "avatar": "https://randomuser.me/api/portraits/women/30.jpg", "id": "59" },
    { "name_full": "Roberto Gutiérrez", "description": "Aficionado a los videojuegos", "avatar": "https://randomuser.me/api/portraits/men/30.jpg", "id": "60" },
    { "name_full": "Irene Castillo", "description": "Amante de los viajes", "avatar": "https://randomuser.me/api/portraits/women/31.jpg", "id": "61" },
    { "name_full": "Sebastián Ortega", "description": "Fan de la cocina", "avatar": "https://randomuser.me/api/portraits/men/31.jpg", "id": "62" },
    { "name_full": "Teresa Pérez", "description": "Apasionada por el arte", "avatar": "https://randomuser.me/api/portraits/women/32.jpg", "id": "63" },
    { "name_full": "Alberto Ruiz", "description": "Entusiasta de la tecnología", "avatar": "https://randomuser.me/api/portraits/men/32.jpg", "id": "64" },
    { "name_full": "Laura Gutiérrez", "description": "Amante de los animales", "avatar": "https://randomuser.me/api/portraits/women/33.jpg", "id": "65" },
    { "name_full": "Guillermo García", "description": "Me encanta el deporte", "avatar": "https://randomuser.me/api/portraits/men/33.jpg", "id": "66" },
    { "name_full": "Carolina Martínez", "description": "Fanática de la lectura", "avatar": "https://randomuser.me/api/portraits/women/34.jpg", "id": "67" },
    { "name_full": "Ricardo López", "description": "Amante del cine", "avatar": "https://randomuser.me/api/portraits/men/34.jpg", "id": "68" },
    { "name_full": "Angela Ramírez", "description": "Aficionada a la música", "avatar": "https://randomuser.me/api/portraits/women/35.jpg", "id": "69" },
    { "name_full": "Miguel Castillo", "description": "Me gusta la tecnología", "avatar": "https://randomuser.me/api/portraits/men/35.jpg", "id": "70" },
    { "name_full": "Elena Hernández", "description": "Apasionada por los viajes", "avatar": "https://randomuser.me/api/portraits/women/36.jpg", "id": "71" },
    { "name_full": "Sergio Navarro", "description": "Entusiasta de la ciencia", "avatar": "https://randomuser.me/api/portraits/men/36.jpg", "id": "72" },
    { "name_full": "Valeria Díaz", "description": "Me encanta bailar", "avatar": "https://randomuser.me/api/portraits/women/37.jpg", "id": "73" },
    { "name_full": "Lucas Torres", "description": "Aficionado a la historia", "avatar": "https://randomuser.me/api/portraits/men/37.jpg", "id": "74" },
    { "name_full": "Silvia Gil", "description": "Amante del yoga", "avatar": "https://randomuser.me/api/portraits/women/38.jpg", "id": "75" },
    { "name_full": "Pedro Fernández", "description": "Entusiasta de la ciencia", "avatar": "https://randomuser.me/api/portraits/men/38.jpg", "id": "76" },
    { "name_full": "Sara Ortiz", "description": "Me gusta el teatro", "avatar": "https://randomuser.me/api/portraits/women/39.jpg", "id": "77" },
    { "name_full": "Antonio Ramírez", "description": "Apasionado de los coches", "avatar": "https://randomuser.me/api/portraits/men/39.jpg", "id": "78" },
    { "name_full": "Claudia López", "description": "Aficionada a la pintura", "avatar": "https://randomuser.me/api/portraits/women/40.jpg", "id": "79" },
    { "name_full": "Felipe García", "description": "Fan de la naturaleza", "avatar": "https://randomuser.me/api/portraits/men/40.jpg", "id": "80" },
    { "name_full": "Lorena Rodríguez", "description": "Me encanta la moda", "avatar": "https://randomuser.me/api/portraits/women/41.jpg", "id": "81" },
    { "name_full": "Gabriel Pérez", "description": "Amante de la tecnología", "avatar": "https://randomuser.me/api/portraits/men/41.jpg", "id": "82" },
    { "name_full": "Rosa González", "description": "Fanática de los libros", "avatar": "https://randomuser.me/api/portraits/women/42.jpg", "id": "83" },
    { "name_full": "Vicente Torres", "description": "Aficionado a la música", "avatar": "https://randomuser.me/api/portraits/men/42.jpg", "id": "84" },
    { "name_full": "Andrea Navarro", "description": "Apasionada por el cine", "avatar": "https://randomuser.me/api/portraits/women/43.jpg", "id": "85" },
    { "name_full": "Emilio Ramírez", "description": "Entusiasta de los deportes", "avatar": "https://randomuser.me/api/portraits/men/43.jpg", "id": "86" },
    { "name_full": "Mercedes Fernández", "description": "Me gusta la fotografía", "avatar": "https://randomuser.me/api/portraits/women/44.jpg", "id": "87" },
    { "name_full": "Juan Carlos Gutiérrez", "description": "Aficionado a los videojuegos", "avatar": "https://randomuser.me/api/portraits/men/44.jpg", "id": "88" },
    { "name_full": "Marina Jiménez", "description": "Amante de los viajes", "avatar": "https://randomuser.me/api/portraits/women/45.jpg", "id": "89" },
    { "name_full": "Ángel Morales", "description": "Fan de la cocina", "avatar": "https://randomuser.me/api/portraits/men/45.jpg", "id": "90" },
    { "name_full": "Elena Navarro", "description": "Apasionada por el arte", "avatar": "https://randomuser.me/api/portraits/women/46.jpg", "id": "91" },
    { "name_full": "Martín Díaz", "description": "Entusiasta de la tecnología", "avatar": "https://randomuser.me/api/portraits/men/46.jpg", "id": "92" },
    { "name_full": "Aitana Sánchez", "description": "Amante de los animales", "avatar": "https://randomuser.me/api/portraits/women/47.jpg", "id": "93" },
    { "name_full": "Jaime García", "description": "Me encanta el deporte", "avatar": "https://randomuser.me/api/portraits/men/47.jpg", "id": "94" },
    { "name_full": "Natalia Ramírez", "description": "Fanática de la lectura", "avatar": "https://randomuser.me/api/portraits/women/48.jpg", "id": "95" },
    { "name_full": "Alfonso Torres", "description": "Amante del cine", "avatar": "https://randomuser.me/api/portraits/men/48.jpg", "id": "96" },
    { "name_full": "Irene Martínez", "description": "Aficionada a la música", "avatar": "https://randomuser.me/api/portraits/women/49.jpg", "id": "97" },
    { "name_full": "Héctor Rodríguez", "description": "Me gusta la tecnología", "avatar": "https://randomuser.me/api/portraits/men/49.jpg", "id": "98" },
    { "name_full": "Silvia Gómez", "description": "Apasionada por los viajes", "avatar": "https://randomuser.me/api/portraits/women/50.jpg", "id": "99" },
    { "name_full": "Adrián Fernández", "description": "Entusiasta de la ciencia", "avatar": "https://randomuser.me/api/portraits/men/50.jpg", "id": "100" }
  ];
  
  document.getElementById('search').addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const results = data.filter(person => person.name_full.toLowerCase().includes(searchTerm));
      displayResults(results);
  });
  
  function displayResults(results) {
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';
      results.forEach(person => {
          const personCard = document.createElement('div');
          personCard.classList.add('card');
          personCard.innerHTML = `
              <img src="${person.avatar}" alt="${person.name_full}">
              <h2>${person.name_full}</h2>
              <p>${person.description}</p>
          `;
          resultsContainer.appendChild(personCard);
      });
  }
  

  displayResults(data);
  