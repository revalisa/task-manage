interface Env {
	ASSETS: Fetcher;
}

export default {
	fetch(request, env) {
		const url = new URL(request.url);
		
		if (url.pathname.startsWith("api/tasks")) {
			return Response.json([
				{
					id: '1',
					title: "Task 1",
					completed: false,
					deadline: 1741247092,
				},
				{
					id: '2',
					title: "Task 2",
					completed: true
					deadline: 1741247092,
				},
			]);
		} 
		 return env.ASSETS.fetch(request);
		},
	} satisfies ExportedHandler<Env>;
}