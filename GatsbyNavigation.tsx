import {Navigation} from 'components/navigation';
import React from 'react';
import {GatsbyNavigationLevel as NavigationLevel} from './';

export class GatsbyNavigation extends Navigation {
	renderNavigation(): React.ReactNode {
		const {items, layout, megaNav} = this.props;
		return <NavigationLevel items={items} autoIcon={layout === 'horizontal'} megaNav={megaNav} />;
	}
}
