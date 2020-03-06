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
               <a href="/docs/about/">About</a><button class="submenu-toggle"><span class="screen-reader-text">Submenu</span><span class="icon-angle-right" aria-hidden="true"></span></button>
               <ul class="toc-submenu">
                  <li class="toc-item"><a href="/docs/about/overview/">Test</a></li>
                  <li class="toc-item"><a href="/docs/about/features/">Spiderman</a></li>
               </ul>
            </li>
            <li class="toc-item has-children">
               <a href="/docs/getting-started/">Superman Started</a><button class="submenu-toggle"><span class="screen-reader-text">Submenu</span><span class="icon-angle-right" aria-hidden="true"></span></button>
               <ul class="toc-submenu">
                  <li class="toc-item"><a href="/docs/getting-started/installation/">Installation</a></li>
                  <li class="toc-item"><a href="/docs/getting-started/quick-start/">Quick Start</a></li>
               </ul>
            </li>
            <li class="toc-item has-children">
               <a href="/docs/ui-components/">UI Components</a><button class="submenu-toggle"><span class="screen-reader-text">Submenu</span><span class="icon-angle-right" aria-hidden="true"></span></button>
               <ul class="toc-submenu">
                  <li class="toc-item"><a href="/docs/ui-components/typography/">Typography</a></li>
               </ul>
            </li>
            <li class="toc-item"><a href="/docs/manage-content/">Manage Content</a></li>
            <li class="toc-item has-children">
               <a href="/docs/tools/">Tools</a><button class="submenu-toggle"><span class="screen-reader-text">Submenu</span><span class="icon-angle-right" aria-hidden="true"></span></button>
               <ul class="toc-submenu">
                  <li class="toc-item"><a href="/docs/tools/starter-theme/">Starter Theme</a></li>
                  <li class="toc-item"><a href="/docs/tools/plug-ins/">Plug-ins</a></li>
               </ul>
            </li>
            <li class="toc-item"><a href="/docs/faq/">FAQ</a></li>
            <li class="toc-item"><a href="/docs/community/">Where To Get Support</a></li>
         </ul>
      </div>
   </div>
</nav>
);
}
}
