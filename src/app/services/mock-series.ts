import { Serie } from '../serie';

const MOCK_SERIES:  Array<Serie> =
[
  {
    id:  0,
    Title: 'The Flash',
    Image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NTgwNTA4NF5BMl5BanBnXkFtZTgwMDQ0MDUxMDI@._V1_SX300.jpg',
    Country: 'United States',
    Description: `The Flash is an American television series developed by Greg Berlanti,
                 Andrew Kreisberg and Geoff Johns, airing on The CW. It is based on the DC
                  Comics character Barry Allen / Flash, a costumed superhero crime-fighter with the power to move at superhuman speeds.`,
    First_Episode_Air_Date: '07/10/2014',
    Seasons: [{
      Number: 1,
      Image: 'https://image.tmdb.org/t/p/w260_and_h390_bestv2/nOUQ03eFsbvSbQB235YrBRuo00.jpg',
      First_Episode_Air_Date: '07/10/2014',
      Last_Episode_Air_Date: '19/04/2015',
      Episodes: [{
          Name: 'Episode 2',
          Number: 2,
          AirDate: '14/10/2014',
          Watched: false,
          Rating: 9
      }]
    },
    { Number: 2,
      Image: 'https://image.tmdb.org/t/p/w260_and_h390_bestv2/pZE6s1yo668pWg7LG4r7TSWnSXG.jpg',
      First_Episode_Air_Date: '07/10/2014',
      Last_Episode_Air_Date: '19/04/2015',
      Episodes: [{
          Name: 'Episode 7',
          Number: 7,
          AirDate: '14/10/2014',
          Watched: true,
          Rating: 7},
        {
          Name: 'Episode 8',
          Number: 8,
          AirDate: '21/10/2014',
          Watched: true,
          Rating: 6},
        {
          Name: 'Episode 9',
          Number: 9,
          AirDate: '28/10/2014',
          Watched: false,
          Rating: 9}
      ]
    },
    { Number: 3,
      Image: 'https://image.tmdb.org/t/p/w260_and_h390_bestv2/qxagPKSYMhyGEgWLkC1NG43uWeN.jpg',
      First_Episode_Air_Date: '07/10/2014',
      Last_Episode_Air_Date: '19/04/2015',
      Episodes: [{
          Name: 'Episode 4',
          Number: 4,
          AirDate: '14/10/2014',
          Watched: true,
          Rating: 9
      }]
    }]
  },
  {
    id:  1,
    Title: 'Gotham',
    Image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI5MjAwNTg0NF5BMl5BanBnXkFtZTgwNDk1NTk4OTE@._V1_SX300.jpg',
    Country: 'United States',
    Description: `Gotham is an American crime-drama television series developed by Bruno Heller,
                   based on characters appearing in and published by DC Comics in their Batman
                    franchise, primarily those of James Gordon and Bruce Wayne.`,
    First_Episode_Air_Date: '22/09/2015',
    Seasons: [{
      Number: 1,
      Image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI5MjAwNTg0NF5BMl5BanBnXkFtZTgwNDk1NTk4OTE@._V1_SX300.jpg',
      First_Episode_Air_Date: '22/09/2015',
      Last_Episode_Air_Date: '04/05/2015',
      Episodes: [{
          Name: 'Episode 1',
          Number: 1,
          AirDate: '22/09/2015',
          Watched: false,
          Rating: 6
      }]
    }]
  },
  {
    id:  2,
    Title: 'Doctor Who',
    Image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGJiYmExMDktNmJjOS00NTE0LWI2ZmYtN2EyNjUzNjBmMjlkXkEyXkFqcGdeQXVyNjcwODY0NzQ@._V1_SX300.jpg',
    Country: 'United Kingdom',
    Description: `Doctor Who is a British science-fiction television programme produced by the BBC from 1963 to the present day.
                 The programme depicts the adventures of the Doctor, a Time Lord—a space and time-travelling humanoid alien.`,
    First_Episode_Air_Date: '26/03/2005',
    Seasons: [{
      Number: 3,
      Image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGJiYmExMDktNmJjOS00NTE0LWI2ZmYtN2EyNjUzNjBmMjlkXkEyXkFqcGdeQXVyNjcwODY0NzQ@._V1_SX300.jpg',
      First_Episode_Air_Date: '25/12/2006',
      Last_Episode_Air_Date: '30/06/2007',
      Episodes: [{
          Name: 'Episode 6',
          Number: 6,
          AirDate: '22/01/2007',
          Watched: false,
          Rating: 10
      }]
    }]
  }
];

export default MOCK_SERIES;

