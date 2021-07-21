import { RequestHandler } from 'express';

import User from './user.model';
import { getAllUsers, getUserById, createUserWithBody, deleteUserById } from './user.service';

/*
  TODO:
  - normal response codes
  - implement updateUser, deleteUser
*/

export const getUser: RequestHandler = async (req, res) => {
  const user: User | null = await getUserById(req.params.userId);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.status(200).send(JSON.stringify(user.toJSON()));
};

export const getUsers: RequestHandler = async (req, res) => {
  const users: User[] = await getAllUsers();
  let response: string = '';
  users.map((u: User) => {
    response += JSON.stringify(u.toJSON(), null, 2);
  });
  res.status(200).send(response);
};

export const createUser: RequestHandler = async (req, res) => {
  const user: User = await createUserWithBody(req.body);
  res.status(200).send(JSON.stringify(user.toJSON()));
};

export const updateUser: RequestHandler = async (req, res) => {
  throw new Error('Not implemented yet');
  console.log('UPDATE USER', req.params.userId);
  res.status(200).send('GOOD');
};

export const deleteUser: RequestHandler = async (req, res) => {
  throw new Error('Not implemented yet');
  console.log('DELETE USER', req.params.userId);
  res.status(200).send('GOOD');
};
