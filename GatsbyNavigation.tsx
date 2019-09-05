import * as React from 'react';

import {GatsbyNavigationLevel} from './';
import {Navigation} from 'components/navigation';

export class GatsbyNavigation extends Navigation {
	renderNavigation(): React.ReactNode {
		const {items} = this.props;

		return <GatsbyNavigationLevel items={items} />;
	}
}
