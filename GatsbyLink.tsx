import {Link} from 'components/editable';
import {Link as GLink} from 'gatsby';
import React from 'react';

export class GatsbyLink extends Link {
	render(): React.ReactNode {
		const {href} = this.props;
		return (
			<GLink {...this.atts} to={href || '#nolink'} activeClassName="active">
				{this.renderInner()}
			</GLink>
		);
	}
}
