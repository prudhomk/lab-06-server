import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

it('GET /api/heroes', async () => {
  const expected = [ 
  
    {
      name: 'Anpanman',
      url: './anpanman.webp',
      type: 'bread'
        
    
    },
    {
      name: 'Baikinman',
      url: './baikinman.png',
      type: 'bacteria'
       
    
    },
    {
      name: 'Shokupanman',
      url: './shokupanman.webp',
      type: 'bread'
        
    
    },
    {
      name: 'Hamburger The Kid',
      url: './hamburger.png',
      type: 'hamburger'
        
    
    },
    {
      name: 'Currypanman',
      url: './currypanman.webp',
      type: 'bread'
        
    
    },
    {
      name: 'Omusubiman',
      url: './omusubiman.png',
      type: 'rice'
        
    
    },
    {
      name: 'Horrorman',
      url: './horrorman.webp',
      type: 'bone'
        
    
    },
    {
      name: 'Melonpanna',
      url: './melonpanna.webp',
      type: 'bread'
        
    
    },
    {
      name: 'Cheese',
      url: './cheese.webp',
      type: 'dog'
        
    
    },
    
  ];

  const response = await request.get('/api/heroes');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});


