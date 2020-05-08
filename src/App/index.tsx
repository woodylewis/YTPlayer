import * as React from 'react';

import ThumbnailYRPlayer from '../components/ThumbnailYTPlayer';

import './_styles.scss';

export default function App() {
	return (
		<div className="App">
			<div className="header">
				<h1>Thumbnail Youtube Player test</h1>
				<h2>React (hooks) + Typescript</h2>
			</div>
			<div className="body">
				<ThumbnailYRPlayer
					videoId="JYjIlHWBAVo"
					thumbnailImage="https://www.metal-archives.com/images/3/9/4/7/394785.jpg?4931"
					thumbnailTitle="Ghost love score"
				/>
			</div>
			<div className="footer">
				<p>
					<a
						href="https://developers.google.com/youtube/iframe_api_reference"
						target="_blank"
					>
						Youtube Docs - IFrame Player API
					</a>
				</p>
			</div>
		</div>
	);
}
