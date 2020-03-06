import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

import { useStaticQuery, graphql } from 'gatsby';


export default class Body extends React.Component {
    render() {

        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.excerpt')}/>
                              

                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />

                        
                        
                        
                        
<meta property="og:url"                content={props.location.pathname} />
<meta property="og:type"               content="article" />
<meta property="og:title"              content={_.get(this.props, 'pageContext.frontmatter.title')} />
<meta property="og:description"        content={_.get(this.props, 'pageContext.frontmatter.excerpt')} />
<meta property="og:image"              content={_.get(this.props, 'pageContext.frontmatter.image')} />
                        
                        
                        
                        
                        
                        
                        
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                </Helmet>
                <div id="page" className="site">
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
