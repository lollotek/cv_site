import { hydrate, prerender as ssr } from 'preact-iso';
import cv from '../data/cv.yml'

import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {
	return (
		<div>
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>{cv.title}</h1>
			<h3>{cv.intro}</h3>
			<section>
				{cv.work.map((item) =>
					(<Resource
						title={item.company}
						description={item.description}
						href="#"
					/>)
				)}
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
