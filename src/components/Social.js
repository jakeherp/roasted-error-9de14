import React from 'react';
import _ from 'lodash';

export default class Social extends React.Component {
    render() {
        return (
            <section>
                <h2>{_.get(this.props, 'pageContext.site.siteMetadata.social.title')}</h2>
                <ul className="icons">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.social.follow_section'), (link, link_idx) => (
                        <li key={link_idx}><a href={_.get(link, 'link_url')} className={'icon style2 ' + _.get(link, 'icon')}><span className="label">{_.get(link, 'title')}</span></a></li>
                    ))}
                </ul>
            </section>
        );
    }
}
