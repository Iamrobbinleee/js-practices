//Mapping and Filters

// Basic Mapping
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Basic Filtering
const ages = [12, 18, 25, 7];
const adults = ages.filter(age => age >= 18);
console.log(adults);

// Combination of Maps and Filters
const myHobbies = [
    {
        name: 'Call of Duty: Mobile',
        place: 1
    },
    {
        name: 'Mobile Legends: Bang Bang',
        place: 2
    },
    {
        name: 'Clash of Clans',
        place: 3
    },
    {
        name: 'Valorant',
        place: 4
    },
    {
        name: 'Dota 2',
        place: 5
    },
];

const myTop = myHobbies.filter(mh => mh.place <= 2)
                       .map(mh => mh.name);
console.log(myTop);

// Advanced Filters and Mappings
const games = [
    {
        name: 'Call of Duty: Mobile',
        place: 1,
        genre: [
            'Guns',
            'Cooperative',
            'War',
            'Multiplayer'
        ],
        developed_by: [
            {
                name: 'Qwerty Uiop',
                age: 27,
            },

            {
                name: 'Karl Evans',
                age: 30,
            }
        ]
    },
    {
        name: 'Mobile Legends: Bang Bang',
        place: 2,
        genre: [
            'Multiplayer',
            'Strategy',
            'Non-fiction',
            'Role Play'
        ],
        developed_by: [
            {
                name: 'John Doe',
                age: 30,
            },
            
            {
                name: 'John Smith',
                age: 40,
            }
        ]
    },
    {
        name: 'Clash of Clans',
        place: 3,
        genre: [
            'Strategy',
            'Cooperative',
            'Real-time'
        ],
        developed_by: [
            {
                name: 'Elen Haven',
                age: 33,
            },
            
            {
                name: 'Jack Owens',
                age: 41,
            }
        ]
    },
    {
        name: 'Valorant',
        place: 4,
        genre: [
            'Multiplayer',
            'Guns',
            'Cooperative'
        ],
        developed_by: [
            {
                name: 'Dave Davis',
                age: 34,
            },
            
            {
                name: 'Ivan Kians',
                age: 37,
            }
        ]
    },
    {
        name: 'Dota 2',
        place: 5,
        genre: [
            'Cooperative',
            'Strategy',
            'Multiplayer',
            'Role Play'
        ],
        developed_by: [
            {
                name: 'Dianne Swans',
                age: 29,
            },
            
            {
                name: 'Bien Denise',
                age: 25,
            }
        ]
    },
];

const firing_games = games.filter(game => game.genre.includes('Guns'))
                          .map(game => game.name);

const role_play_games = games.filter(game => game.genre.includes('Role Play'))
                          .map(game => game.name);        
                          
const real_time_strat = games.filter(game => game.genre.includes('Real-time'))
                          .map(game => game.name);

const developed_by_oldies = games.filter(game => game.developed_by.some(gdb => gdb.age >= 40))
                          .map(game => ({ name: game.name, place: game.place }));

console.log(developed_by_oldies);