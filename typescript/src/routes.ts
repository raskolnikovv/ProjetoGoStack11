import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloGod(request: Request, response: Response) {
  const user = createUser({
    email: 'raskolnikovsete@gmail.com',
    password: '123456',
    techs: [
      'Nodes.js',
      'ReactJS',
      'React Native',
      { title: 'Javascrip', experience: 100 },
    ]
  });

  return response.json({ message: 'Hello God' });
};
