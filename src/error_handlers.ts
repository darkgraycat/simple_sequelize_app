import { ErrorRequestHandler } from 'express';
import chalk from 'chalk';

export const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(chalk.bgRed.black(err.stack));
  next(err);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
};
