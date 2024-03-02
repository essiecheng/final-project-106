

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a9cd4f96.js","_app/immutable/chunks/index.eff21656.js","_app/immutable/chunks/singletons.516932c0.js"];
export const stylesheets = [];
export const fonts = [];
