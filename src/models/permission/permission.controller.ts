import { RequestHandler } from 'express';

export const getPermission: RequestHandler = async (req, res) => {
  res.status(200).send('GOOD');
};

export const getPermissions: RequestHandler = async (req, res) => {
  res.status(200).send('GOOD');
};

export const createPermission: RequestHandler = async (req, res) => {
  res.status(200).send('GOOD');
};

export const updatePermission: RequestHandler = async (req, res) => {
  res.status(200).send('GOOD');
};

export const deletePermission: RequestHandler = async (req, res) => {
  res.status(200).send('GOOD');
};
