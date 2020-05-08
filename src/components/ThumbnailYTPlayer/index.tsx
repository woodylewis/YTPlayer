import * as React from 'react';
// import YouTube from '@u-wave/react-youtube';

import YoutubeIframePlayer from '../YoutubeIframePlayer';

import PlayIconSvg from './PlayIconSvg';

import './_styles.scss';

export interface IThumbnailYTPlayerProps {
	/** youtube video id */
	videoId: string;
	thumbnailImage?: string;
	thumbnailTitle?: string;
}

export const ThumbnailYTPlayer: React.FunctionComponent<
	IThumbnailYTPlayerProps
> = ({ videoId, thumbnailImage, thumbnailTitle }) => {
	const [play, setPlay] = React.useState(false);
	const onThumbLayerClick = () => setPlay(true);

	const thumbStyle: React.CSSProperties = {
		backgroundImage: `url(${thumbnailImage})`
	};

	return (
		<div className="thumbnail-yt-player">
			{thumbnailImage && !play && (
				<div
					className="thumbnail-yt-player__thumb"
					onClick={onThumbLayerClick}
					style={thumbStyle}
				>
					<div className="thumbnail-yt-player__thumb-icon">
						<PlayIconSvg width="50px" />
					</div>
					<div className="thumbnail-yt-player__thumb-title">
						{thumbnailTitle}
					</div>
				</div>
			)}

			{play && (
				<YoutubeIframePlayer
					className="thumbnail-yt-player__iframe"
					videoId={videoId}
					disableControls
					autoplay
				/>
			)}
		</div>
	);
};

export default ThumbnailYTPlayer;
