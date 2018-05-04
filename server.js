import express from 'express';

const server = express();

import projectRoutes from './routes/projectRoutes';
import actionRoutes from './routes/actionRoutes';

server.use(express.json());
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

server.get('/', (req, res) => {
	res.json({ api: 'running' });
});

server.listen(3000, () => console.log('server running on port 3000'));
