import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <noscript>{`<link rel="stylesheet" href=${safePrefix('assets/css/noscript.css')} />`}</noscript>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
                </Helmet>
                    <div id="wrapper">
                        <Header {...this.props} />
                        <Menu {...this.props} />
                        <div id="main">
                            <div className="inner">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer {...this.props} />
                    </div>
            </React.Fragment>
        );
    }
}
