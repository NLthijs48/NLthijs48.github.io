import {HobbyInformation} from '../ActivityInformation';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import ActivityType from '../ActivityType';
import logo from './logo.png';
import React from 'react';
import ExternalLink from '../../components/ExternalLink';
import HighlightType from '../HighlightType';
import statsGraph from './statsGraph.png';
import statsNumbers from './statsNumbers.png';

const areaShop: HobbyInformation = {
	activityType: ActivityType.Hobby,
	slug: 'areashop',
	name: 'AreaShop',
	oneliner: 'Minecraft server plugin to sell and rent out in-game areas for in-game currency.',
	description: (
		<div>
			<div>
				<img src={logo} alt="AreaShop logo: wordmark in green with an underline" style={{height: 80}} />
			</div>
			<p>
				AreaShop is a plugin for the Minecraft server API called <ExternalLink href="https://bukkit.org/">Bukkit</ExternalLink>{' '}
				(later continued by <ExternalLink href="https://www.spigotmc.org/">Spigot</ExternalLink>). This plugin makes it possible for
				server admins to sell and rent out in-game regions with for an in-game currency. To achieve this AreaShop integrates with{' '}
				<ExternalLink href="https://github.com/EngineHub/WorldGuard">WorldGuard</ExternalLink> for defining regions and{' '}
				<ExternalLink href="https://github.com/MilkBowl/VaultAPI">Vault</ExternalLink> for economy integration.
			</p>
		</div>
	),
	from: 'January 2014', // Guess, first commit March 2014 with initial released version (have been developing and using it privately before that)
	till: 'August 2019', // End of active development
	Icon: HolidayVillageIcon,

	highlights: [
		{
			type: HighlightType.Link,
			title: 'GitHub repository',
			href: 'https://github.com/NLthijs48/AreaShop',
			caption: 'All code was open source from the start, with some occasional contributions from the community',
		},
		{
			type: HighlightType.Image,
			title: 'Statistics about users of the plugin',
			image: statsNumbers,
		},
		{
			type: HighlightType.Image,
			title: 'Graph of number of servers using the plugin',
			image: statsGraph,
			caption: 'Statistics around 2016-05-04',
		},
		{
			type: HighlightType.Link,
			title: 'Plugin documentation on GitHub',
			href: 'https://github.com/NLthijs48/AreaShop/wiki',
			caption:
				'Extensive documentation is available, from a simple installation guide to help with setting up complex features. ' +
				'The goal has always been to make the plugin itself easy to use in-game, but documentation still helps people to decide installing the plugin and prevents some support questions.',
		},
		{
			type: HighlightType.Link,
			title: 'Plugin distribution: Bukkit',
			href: 'https://dev.bukkit.org/projects/regionbuyandrent',
			caption:
				'Distribution started here initially, Bukkit was the first open source server software and has provided the initial plugin api. My plugin got downloaded 124k+ times and got 1000+ ratings on there.',
		},
		{
			type: HighlightType.Link,
			title: 'Plugin distribution: Spigot',
			href: 'https://www.spigotmc.org/resources/areashop.2991/',
			caption:
				'Spigot slowly took over from Bukkit, so I made the plugin there available as well. Here it got downloaded 192k+ times and got 197 ratings',
		},
	],
};

export default areaShop;
