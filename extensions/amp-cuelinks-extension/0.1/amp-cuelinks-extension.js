/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Layout} from '../../../src/layout';
import parse_url from './cuelinks';
import cuelinksJSON from './parseJSON';

export class AmpCuelinksExtension extends AMP.BaseElement {

  /** @param {!AmpElement} element */
  constructor(element) {
    super(element);

    /** @private {string} */
    this.myText_ = 'hello world';
    /** @private {!Element} */
    this.container_ = this.win.document.createElement('div');
  }

  /** @override */
  buildCallback() {
    const pubID = this.element.getAttribute('data-pubid');
    this.container_.textContent = this.myText_;
    this.element.appendChild(this.container_);
    this.applyFillContent(this.container_, /* replacedContent */ true);
    const cuelinks = cuelinksJSON(pubID);
    console.log(bool);
    const a = this.win.document.getElementsByTagName('a');
    if(cuelinks){
      for(var i = 0; i < a.length; ++i)
      {
        addEvent(a[i], "click", cuelinksUrl);
        addEvent(a[i], "mousedown", cuelinksUrl);
      }
      const area = this.win.document.getElementsByTagName('area');
      for(var i = 0; i < area.length; ++i)
      {
        addEvent(area[i], "click", cuelinksUrl);
        addEvent(area[i], "mousedown", cuelinksUrl);
      }
    }
    function cuelinksUrl(){
      const host = parse_url(this.href);
      const targ = this;
      if(location.hostname != host.host && host.host != undefined && host.host != 'linksredirect.com' && host.host != 'track.in.omgpm.com' && host.host != 'www.s2d6.com' && host.host != 'affiliates.tyroodr.com' && host.host != 'affiliates.vcommission.com' && host.host != 'plus.google.com')
      {
        targ.href = 'https://linksredirect.com?pub_id=' + pubID + '&subid=' + this.getAttribute("data-cue") + '&url='+escape(this.href);
      }
    }
    function addEvent( obj, type, fn ) {
      if ( obj.attachEvent ) {
        obj['e'+type+fn] = fn;
        obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
        obj.attachEvent( 'on'+type, obj[type+fn] );
      } else
        obj.addEventListener( type, fn, false );
    }

  }

  /** @override */
  isLayoutSupported(layout) {
    return layout == Layout.RESPONSIVE;
  }
}

AMP.registerElement('amp-cuelinks-extension', AmpCuelinksExtension);
