import {HobbyInformation} from '../ActivityInformation';
import ActivityType from '../ActivityType';
import HighlightType from '../HighlightType';
import React from 'react';
import MapIcon from '@mui/icons-material/Map';

const openStreetMap: HobbyInformation = {
	activityType: ActivityType.Hobby,
	name: 'OpenStreetMap contributions',
	slug: 'openStreetMap',
	oneliner: 'OpenStreetMap contributions to improve the maps in my neighbourhood, and across the The Netherlands.',
	description: (
		<div>
			I like databases and I like open source, so OpenStreetMap is great combination of those. Accurate maps are quite important for
			navigation, which could be by car, bike or foot. Google Maps and such are good for cars, but for bikes and foot they are
			lacking. OpenStreetMap is actually a lot better for that, and if missing anything, you can just fix it yourself!
		</div>
	),
	from: 'June 2015',
	Icon: MapIcon,
	highlights: [
		{
			type: HighlightType.Link,
			href: 'https://www.openstreetmap.org/user/NLthijs48',
			title: 'OpenStreetMap profile',
			caption: 'All my map changes, notes I added for others, etc.',
		},
		{
			type: HighlightType.Link,
			href: 'https://streetcomplete.app/',
			title: 'StreetComplete app: editing on the go',
			caption:
				'Fantastic app to improve the data that is already in OpenStreetMap, and adding new elements is also getting easier. I use it during random walks, but also targeted walks through a neighborhood.',
		},
		{
			type: HighlightType.Link,
			href: 'https://osmand.net/',
			title: 'OsmAnd app: navigation and browsing',
			caption:
				'Especially recommended for bike navigation, which is a lot better than Google Maps. Great for walking/hiking, usually in any part of the world the path information in OpenStreetMap is top-notch.',
		},
		{
			type: HighlightType.Link,
			href: 'https://josm.openstreetmap.de/',
			title: 'JSOM desktop app: powerful editor',
			caption:
				'Powerful editing tool to do larger edits, like drawing in all sidewalks in a neighborhood, or importing buildings from the BAG government data set. Offers a ton of plugins meant for specific editing use cases',
		},
	],
};

export default openStreetMap;
