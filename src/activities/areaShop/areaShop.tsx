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
			<p>
				The plugin is open source and can be found on{' '}
				<ExternalLink href="https://github.com/NLthijs48/AreaShop">GitHub</ExternalLink>. Documentation of the plugin is available
				on the <ExternalLink href="https://github.com/NLthijs48/AreaShop/wiki">wiki of the GitHub repository</ExternalLink>. The
				plugin was maily distributed through the{' '}
				<ExternalLink href="https://www.spigotmc.org/resources/areashop.2991/">Spigot</ExternalLink> resources section and the{' '}
				<ExternalLink href="https://dev.bukkit.org/projects/regionbuyandrent">BukkitDev</ExternalLink> platform.
			</p>
		</div>
	),
	from: 'January 2014', // Guess, first commit March 2014 with initial released version (have been developing and using it privately before that)
	till: 'August 2019', // End of active development
	Icon: HolidayVillageIcon,
	website: 'https://github.com/NLthijs48/AreaShop',

	highlights: [
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
	],
};

export default areaShop;
