import HighlightType from './HighlightType';

interface HighlightBase {
	type: HighlightType;
}

interface HighlightImage extends HighlightBase {
	type: HighlightType.Image;
	/**
	 * Absolute url to the image, excluding the domain name
	 * - retrieved by directly importing an image
	 */
	image: string;
	title: string;
	caption: string;
}
interface HighlightLink extends HighlightBase {
	type: HighlightType.Link;
}

type Highlight = HighlightImage | HighlightLink;

export default Highlight;