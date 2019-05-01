import React from 'react';
import _ from 'lodash';
import htmlToReact from '../utils/htmlToReact';

import {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                {_.get(this.props, 'pageContext.frontmatter.img_src') && 
                    <span className="image main"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_src'))} alt="" /></span>
                }
                {htmlToReact(_.get(this.props, 'pageContext.html'))}
            </Layout>
        );
    }
}
