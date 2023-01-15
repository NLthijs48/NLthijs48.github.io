import ActivityInformation from './ActivityInformation';
import crisp from './crisp/crisp';
import computerScienceMaster from './computerScienceMaster/computerScienceMaster';
import computerScienceBachelor from './computerScienceBachelor/computerScienceBachelor';
import homeAssistant from './homeAssistant/homeAssistant';
import staying from './staying/staying';
import happening from './happening/happening';
import errorSink from './errorSink/errorSink';
import interactiveMessenger from './interactiveMessenger/interactiveMessenger';
import areaShop from './areaShop/areaShop';

const allActivities: ActivityInformation[] = [
	crisp,
	homeAssistant,
	computerScienceMaster,
	staying,
	errorSink,
	interactiveMessenger,
	happening,
	areaShop,
	computerScienceBachelor,
];

export default allActivities;
