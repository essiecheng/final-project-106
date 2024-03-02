

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.02932c1f.js","_app/immutable/chunks/index.eff21656.js"];
export const stylesheets = ["_app/immutable/assets/2.5ce68600.css"];
export const fonts = [];
