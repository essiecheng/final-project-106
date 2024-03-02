export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png","olympic.csv"]),
	mimeTypes: {".png":"image/png",".csv":"text/csv"},
	_: {
		client: {"start":"_app/immutable/entry/start.16a00934.js","app":"_app/immutable/entry/app.73d13d98.js","imports":["_app/immutable/entry/start.16a00934.js","_app/immutable/chunks/index.eff21656.js","_app/immutable/chunks/singletons.516932c0.js","_app/immutable/entry/app.73d13d98.js","_app/immutable/chunks/index.eff21656.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
