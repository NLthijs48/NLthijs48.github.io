import HighlightType from './HighlightType';

interface HighlightBase {
	type: HighlightType;
}

interface HighlightText extends HighlightBase {
	type: HighlightType.Text;
	title: string;
	text: string;
}

interface HighlightImage extends HighlightBase {
	type: HighlightType.Image;
	/**
	 * Absolute url to the image, excluding the domain name
	 * - retrieved by directly importing an image
	 */
	image: string;
	title: string;
	caption?: string;
}
interface HighlightLink extends HighlightBase {
	type: HighlightType.Link;
	title: string;
	href: string;
	caption?: string;
	// TODO: support image?
}

type Highlight = HighlightText | HighlightImage | HighlightLink;

export default Highlight;
