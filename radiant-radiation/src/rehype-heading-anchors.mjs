import { visit } from 'unist-util-visit';
import Slugger from 'github-slugger';

function textOf(node) {
	let text = '';
	visit(node, 'text', (child) => {
		text += child.value;
	});
	return text;
}

// ponytail: runs before Astro's own heading-id pass (user rehypePlugins run first), so it
// assigns the same slugger-based id itself, then Astro's pass just reuses it. Adds a
// clickable "#" permalink next to each heading.
export default function rehypeHeadingAnchors() {
	return (tree) => {
		const slugger = new Slugger();

		visit(tree, 'element', (node) => {
			if (!/^h[2-4]$/.test(node.tagName)) return;

			node.properties ??= {};
			if (typeof node.properties.id !== 'string') {
				node.properties.id = slugger.slug(textOf(node));
			}

			node.children.push({
				type: 'element',
				tagName: 'a',
				properties: {
					href: `#${node.properties.id}`,
					className: ['heading-anchor'],
					ariaHidden: 'true',
					tabIndex: -1,
				},
				children: [{ type: 'text', value: '#' }],
			});
		});
	};
}
