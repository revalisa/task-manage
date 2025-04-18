interface Env {
	ASSETS: Fetcher;
	DB: D1Database;
}
export default {
	async fetch(request: Request, env: Env) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/api/tasks")) {
			return Response.json([
				{
					id: '1',
					title: "Task 1",
					complated: false,
					deadline: 1741247092,
				},
				{
					id: '2',
					title: "Task 2",
					complated: true,
					deadline: 1741247092,
				},
			]);
			

		}
		return env.ASSETS.fetch(request);
	},
}	
		