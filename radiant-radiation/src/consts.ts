// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Gilberto Santos';
export const SITE_DESCRIPTION =
	'Articles, research and projects about Artificial Intelligence, LLMs, solution architecture, cloud, data and quantum computing.';
export const SITE_DESCRIPTION_PT =
	'Artigos, pesquisas e projetos sobre Inteligência Artificial, LLMs, arquitetura de soluções, cloud, dados e computação quântica.';

// BASE_URL isn't guaranteed to have a trailing slash; normalize so callers can always do `${BASE}/path`.
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');