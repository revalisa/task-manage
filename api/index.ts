interface Env {
	ASSETS: Fetcher;
	DB: D1Database;
}
export default {
	async fetch(request: Request, env: Env) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/api/tasks")) {
				let{ results } = await env.DB.prepare("SELECT * FROM tasks").all();
				return Response.json(results);
				if (request.method === 'GET') {
				let { results } = await env.DB.prepare("SELECT * FROM tasks").all();
				return Response.json(results);	
				} else if (request.method === 'POST') {
						const newId = crypto.randomUUID();
						const input = await request.json<any>()	
						const query = `INSERT INTO tasks (id,title,description,deadline,completed) values ("${newId}","${input.title}","${input.description}","${input.deadline}","${input.completed}")`
						const NewTask = await env.DB.exec(query);
						return Response.json({ NewTask});
					}
			}		
	}

}