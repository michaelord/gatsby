import {NavigationLevel, NavItem} from 'components/navigation';
import React from 'react';
import {GatsbyLink as Link} from './';

export class GatsbyNavigationLevel extends NavigationLevel {
	renderLink(item: NavItem, parent: NavItem | null = null): React.ReactNode {
		/*
		const isPartiallyActive = (obj:any
			) =>{

				return obj.isPartiallyCurrent
				? { className: "active" }
				: null

			}
			*/

		// if there is no anchor or the link is not internal, use the custom link
		if (!item.href || (item.href && !/^\/(?!\/)/.test(item.href))) {
			return super.renderLink(item, parent);
		}

		return <Link base="nav-link" {...item} />;
	}
}

export default GatsbyNavigationLevel;
