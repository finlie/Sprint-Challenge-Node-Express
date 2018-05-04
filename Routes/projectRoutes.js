import express from 'express';
import projectController from '../Controllers/projectController';

const projectRoutes = express.Router();
const {
	getProjects,
	getProject,
	getProjectActions,
	createProject,
	updateProject,
	deleteProject,
} = projectController;
//

projectRoutes.get('/', getProjects);
projectRoutes.get('/:id', getProject);
projectRoutes.get('/:id/actions', getProjectActions);
projectRoutes.post('/', createProject);
projectRoutes.put('/:id', updateProject);
projectRoutes.delete('/:id', deleteProject);

export default projectRoutes;
