import { Breed } from './breeds.model';

export const BREEDS: Breed[] = [
    {
        id: 0,
        name: 'American Shorthair',
        alias: 'Domestic Shorthair',
        image: 'assets/img/breeds/American-Shorthair-1.jpg',
        origin: 'United States',
        size: ['medium', 'large'],
        coat: [
            'Short',
            'Dense',
            'Hard',
            'Lustrous'
        ],
        lapCat: true,
        lifeSpan: [15, 17],
        temperament: [
            'Active',
            'Curious',
            'Easy Going',
            'Playful',
            'Calm'
        ],
        weight: 0,
        colors: [
            'Black',
            'Blue',
            'Brown',
            'Silver',
            'Tabby'
        ]
    },
    {
        id: 0,
        name: 'Abyssinian',
        image: 'assets/img/breeds/Abyssinian-1.jpg',
        origin: '',
        size: '',
        coat: '',
        lapCat: false,
        lifeSpan: [],
        temperament: '',
        weight: 0,
        colors: ''
    },
    {
        id: 0,
        name: 'American Curl',
        image: 'assets/img/breeds/American-Curl-1.jpg',
        origin: '',
        size: '',
        coat: '',
        lapCat: false,
        lifeSpan: [],
        temperament: '',
        weight: 0,
        colors: ''
    },
    {
        id: 0,
        name: 'American Bobtail',
        image: 'assets/img/breeds/American-Bobtail-1.jpg',
        origin: '',
        size: '',
        coat: '',
        lapCat: false,
        lifeSpan: [],
        temperament: '',
        weight: 0,
        colors: ''
    }
];
