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
                    
					<script src="https://code.iconify.design/1/1.0.5/iconify.min.js"></script>       

                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
					<link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.url')} />
						
                        
                        
                     
                        
                        
						
	


     <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content={_.get(this.props, 'pageContext.frontmatter.title')}/>
      <meta property="og:description" content={_.get(this.props, 'pageContext.frontmatter.excerpt')}/>
      <meta property="og:url" content="https://codevarsity.org/html-article-tag/"/>
      <meta property="og:site_name" content="Codevarsity"/>
      <meta property="article:publisher" content="https://www.facebook.com/thecodevarsity/"/>
      <meta property="article:tag" content="html-article"/>
      <meta property="article:section" content="HTML"/>
      <meta property="article:published_time" content={_.get(this.props, 'pageContext.frontmatter.published')}/>
      <meta property="article:modified_time" content={_.get(this.props, 'pageContext.frontmatter.modified')}/>
      <meta property="og:updated_time" content={_.get(this.props, 'pageContext.frontmatter.updated')}/>
      <meta property="fb:app_id" content="1701072829970869"/>
      <meta property="og:image" content={_.get(this.props, 'pageContext.frontmatter.image')}/>
      <meta property="og:image:secure_url" content={_.get(this.props, 'pageContext.frontmatter.image')}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:description" content={_.get(this.props, 'pageContext.frontmatter.excerpt')}/>
      <meta name="twitter:title" content={_.get(this.props, 'pageContext.frontmatter.title')}/>
      <meta name="twitter:site" content="@thecodevarsity"/>
      <meta name="twitter:image" content={_.get(this.props, 'pageContext.frontmatter.image')}/>
      <meta name="twitter:creator" content="@thecodevarsity"/>






	
						
						
						
						
						
		 
    
						
						
						
						
						
						
                        
                        
                        
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
