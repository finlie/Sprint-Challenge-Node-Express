import express from 'express';
import actionController from '../Controllers/actionController';

const actionRoutes = express.Router();
const {
	getActions,
	getAction,
	getActionActions,
	createAction,
	updateAction,
	deleteAction,
} = actionController;

actionRoutes.get('/', getActions);
actionRoutes.get('/:id', getAction);
actionRoutes.post('/', createAction);
actionRoutes.put('/:id', updateAction);
actionRoutes.delete('/:id', deleteAction);

export default actionRoutes;
