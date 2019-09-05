import * as React from 'react';

import {GatsbyLink} from './';

import {NavigationLevel, NavItem} from 'components/navigation';

export class GatsbyNavigationLevel extends NavigationLevel {
	renderLink(item: NavItem): React.ReactNode {
		return <GatsbyLink base="nav" {...item} />;
	}
}

export default GatsbyNavigationLevel;
