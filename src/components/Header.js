import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Menu from './Menu';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export default class Header extends React.Component {
    render() {
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
            <header id="masthead" className="site-header outer">
              <div className="inner">
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.data.header.logo_img') &&
                    <p className="site-logo">
                      <Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>
                        <img src={safePrefix(_.get(this.props, 'pageContext.site.data.header.logo_img'))} alt="Logo" />
                      </Link>
                    </p>
                    }
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') ?
                    <h1 className="site-title"><Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>{_.get(this.props, 'pageContext.site.data.header.title')}</Link></h1>
                     :
                    <p className="site-title"><Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>{_.get(this.props, 'pageContext.site.data.header.title')}</Link></p>
                    }
                  </div>
                  {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.data.header.has_nav')) && <React.Fragment>
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span className="icon-close" aria-hidden="true" /></button>
                      <Menu {...this.props} menu={menu} menu_class={'menu'} page={this.props.pageContext} />



      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label class="dark-toggle">
            <input class="dark-toggle"
              type="checkbox" id="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />  <label for="checkbox" ></label>
{' '}
            Dark mode<svg version="1.1" width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" class="dark-toggle"></path></svg>
          </label>
        )}
      </ThemeToggler>







                    </div>
                  </nav>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu" aria-hidden="true" /></button>
                  </React.Fragment>}
                </div>
              </div>
            </header>
        );
    }
}
