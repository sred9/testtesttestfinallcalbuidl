import React from 'react';
import _ from 'lodash';

import {getPage, classNames, Link, safePrefix, getPages} from '../utils';
import DocsSubmenu from './DocsSubmenu';

export default class DocsMenu extends React.Component {
    render() {
        let site = _.get(this.props, 'site');
        let page = _.get(this.props, 'page');
        let root_page_path = _.get(site, 'data.doc_sections.root_folder') + 'index.md';
        let root_page = getPage(this.props.pageContext.pages, root_page_path);
        return (
            <nav id="docs-nav" className="docs-nav">
              <div id="docs-nav-inside" className="docs-nav-inside sticky">
                <button id="docs-nav-toggle" className="docs-nav-toggle">Navigate Docs<span className="icon-angle-right" aria-hidden="true" /></button>
                <div className="docs-toc-wrap">
                  
            <ul id="docs-toc" class="docs-toc">
   <li class="toc-item current"><a aria-current="page" class="head" href="/docs/">Javascript</a></li>
   <li class="toc-item has-children">
      <a href="/docs/about/">HTML Basics</a><button class="submenu-toggle"><span class="screen-reader-text">Submenu</span><span class="icon-angle-right" aria-hidden="true"></span></button>
      <ul class="toc-submenu">
			 <li class="toc-item"><a href="/docs/about/overview/">HTML Introduction</a></li>
			 <li class="toc-item"><a href="/docs/about/features/">HTML Getting Started</a></li>
			 <li class="toc-item"><a href="/docs/about/features/">HTML Elements</a></li>
			 <li class="toc-item"><a href="/docs/about/features/">HTML Elements</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Attributes</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Headings</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Paragraphs</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Links</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Text Formatting</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Styles</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Images</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Tables</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Lists</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Forms</a></li>
			<li class="toc-item"><a href="/docs/about/features/">HTML Iframes</a></li>

		
      </ul>
   </li>
   <li class="toc-item has-children">
      <a href="/docs/getting-started/">HTML Advanced</a><button class="submenu-toggle"><span class="screen-reader-text">Submenu</span><span class="icon-angle-right" aria-hidden="true"></span></button>
      <ul class="toc-submenu">
         <li class="toc-item"><a href="/docs/getting-started/installation/">HTML Doctypes</a></li>
         <li class="toc-item"><a href="/docs/getting-started/quick-start/">HTML Layout</a></li>
		 <li class="toc-item"><a href="/docs/about/features/">HTML Head</a></li>
		 <li class="toc-item"><a href="/docs/about/features/">HTML Meta</a></li>
		 <li class="toc-item"><a href="/docs/about/features/">HTML Scripts</a></li>
		 <li class="toc-item"><a href="/docs/about/features/">HTML Entites</a></li>
		 <li class="toc-item"><a href="/docs/about/features/">HTML URL</a></li>
		 <li class="toc-item"><a href="/docs/about/features/">HTML URL Encode</a></li>
		 <li class="toc-item"><a href="/docs/about/features/">HTML Validation</a></li>
      </ul>
   </li>
   
</ul>
            </div>
              </div>
            </nav>
        );
    }
}
