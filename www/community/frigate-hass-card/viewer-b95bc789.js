import{s as e,d9 as i,da as t,db as a,y as s,bj as r,bk as o,bl as d,bn as l,cP as n,bQ as h,cQ as u,cM as v,l as c,cS as g,cU as f,cO as p,di as m,c5 as w,d7 as y,d8 as C,de as _,ck as b,cl as $,dj as M,dk as P,dl as R,dm as x}from"./card-555679fd.js";import{L as q,A as V,i as S,w as I,p as T,h as F,s as k,M as z}from"./lazyload-c2d6254a.js";import"./ha-hls-player-aef987da.js";import{m as W}from"./audio-557099cb.js";import{u as j}from"./media-layout-8e0c974f.js";import{a as E}from"./media-b0eb3f2a.js";let D=class extends e{render(){if(this.hass&&this.view&&this.viewerConfig&&this.cameraManager&&this.cardWideConfig){if(!this.view.queryResults?.hasResults()){const e=this.view.getDefaultMediaType();if(!e)return;return"recordings"===e?i(this,this.hass,this.cameraManager,this.cardWideConfig,this.view,{targetView:"recording",select:"latest"}):t(this,this.hass,this.cameraManager,this.cardWideConfig,this.view,{targetView:"media",mediaType:e,select:"latest"}),a({cardWideConfig:this.cardWideConfig})}return s`
      <frigate-card-viewer-carousel
        .hass=${this.hass}
        .view=${this.view}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .cardWideConfig=${this.cardWideConfig}
      >
      </frigate-card-viewer-carousel>
    `}}static get styles(){return r(":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nfrigate-card-viewer-carousel {\n  flex: 1;\n  min-height: 0;\n}")}};o([d({attribute:!1})],D.prototype,"hass",void 0),o([d({attribute:!1})],D.prototype,"view",void 0),o([d({attribute:!1})],D.prototype,"viewerConfig",void 0),o([d({attribute:!1})],D.prototype,"resolvedMediaCache",void 0),o([d({attribute:!1})],D.prototype,"cameraManager",void 0),o([d({attribute:!1})],D.prototype,"cardWideConfig",void 0),D=o([l("frigate-card-viewer")],D);const H="frigate-card-viewer-provider";let L=class extends e{constructor(){super(...arguments),this._refMediaCarousel=n()}updated(e){if(super.updated(e),e.has("view")){const i=e.get("view");this.view?.context?.mediaViewer!==i?.context?.mediaViewer&&this._seekHandler()}}_getTransitionEffect(){return this.viewerConfig?.transition_effect??h.media_viewer.transition_effect}_getPlayer(e){return e||(e=this._refMediaCarousel.value?.frigateCardCarousel()?.getCarouselSelected()?.element),e?.querySelector(H)??null}_getPlugins(){return[...this.view?.queryResults?.getResultsCount()?[u({forceWheelAxis:"y"})]:[],q({...this.viewerConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadSlide(i)}}),V({playerSelector:H,...this.viewerConfig?.auto_play&&{autoPlayCondition:this.viewerConfig.auto_play},...this.viewerConfig?.auto_pause&&{autoPauseCondition:this.viewerConfig.auto_pause},...this.viewerConfig?.auto_mute&&{autoMuteCondition:this.viewerConfig.auto_mute},...this.viewerConfig?.auto_unmute&&{autoUnmuteCondition:this.viewerConfig.auto_unmute}})]}_getMediaNeighbors(){const e=this.view?.queryResults?.getSelectedIndex()??null,i=this.view?.queryResults?.getResultsCount()??0;if(!this.view||!this.view.queryResults||null===e)return[null,null];return[e>0?this.view.queryResults.getResult(e-1):null,e+1<i?this.view.queryResults.getResult(e+1):null]}_setViewHandler(e){this._setViewSelectedIndex(e.detail.index)}_setViewSelectedIndex(e){if(!this.view?.queryResults)return;const i=this.view.queryResults.getSelectedIndex();if(null===i||i===e)return;const t=this.view?.queryResults?.clone().selectResult(e);if(!t)return;const a=t.getSelectedResult()?.getCameraID();this.view?.evolve({queryResults:t,...a&&{camera:a}}).dispatchChangeEvent(this)}_lazyloadSlide(e){e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]);const i=e?.querySelector("frigate-card-viewer-provider");i&&(i.disabled=!1)}_getSlides(){if(!this.view||!this.view.queryResults)return[];const e=[];for(let i=0;i<this.view.queryResults.getResultsCount();++i){const t=this.view.queryResults.getResult(i);if(t){const a=this._renderMediaItem(t,i);a&&(e[i]=a)}}return e}willUpdate(e){e.has("viewerConfig")&&j(this,this.viewerConfig?.layout)}render(){const e=this.view?.queryResults?.getResultsCount()??0;if(!e)return v(this,c("common.no_media"),"info",{icon:"mdi:multimedia"});const i=this.view?.queryResults?.getSelectedResult()??this.view?.queryResults?.getResult(e-1);if(!(this.hass&&this.cameraManager&&i&&this.view&&this.view.queryResults))return;const[t,a]=this._getMediaNeighbors(),r=e=>{const i=this.view?.queryResults?.getSelectedIndex()??null;if(!this.view||!this.view?.queryResults||null===i)return;const t="previous"===e?i-1:i+1;t>=0&&t<this.view.queryResults.getResultsCount()&&this._setViewSelectedIndex(t)},o=this.cameraManager.getCameraMetadata(this.hass,i.getCameraID());return s` <frigate-card-media-carousel
      ${g(this._refMediaCarousel)}
      .carouselOptions=${S([this.viewerConfig],(()=>({draggable:this.viewerConfig?.draggable??!0})))}
      .carouselPlugins=${S([this.viewerConfig,this.view.queryResults.getResults()],this._getPlugins.bind(this))}
      .label=${i.getTitle()??void 0}
      .logo=${o?.engineLogo}
      .titlePopupConfig=${this.viewerConfig?.controls.title}
      .selected=${this.view?.queryResults?.getSelectedIndex()??0}
      transitionEffect=${this._getTransitionEffect()}
      @frigate-card:media-carousel:select=${this._setViewHandler.bind(this)}
      @frigate-card:media:loaded=${this._seekHandler.bind(this)}
    >
      <frigate-card-next-previous-control
        slot="previous"
        .hass=${this.hass}
        .direction=${"previous"}
        .controlConfig=${this.viewerConfig?.controls.next_previous}
        .thumbnail=${t?.getThumbnail()??void 0}
        .label=${t?.getTitle()??""}
        ?disabled=${!t}
        @click=${e=>{r("previous"),f(e)}}
      ></frigate-card-next-previous-control>
      ${S(this.view?.queryResults?.getResults(),(()=>this._getSlides()))}
      <frigate-card-next-previous-control
        slot="next"
        .hass=${this.hass}
        .direction=${"next"}
        .controlConfig=${this.viewerConfig?.controls.next_previous}
        .thumbnail=${a?.getThumbnail()??void 0}
        .label=${a?.getTitle()??""}
        ?disabled=${!a}
        @click=${e=>{r("next"),f(e)}}
      ></frigate-card-next-previous-control>
    </frigate-card-media-carousel>`}async _seekHandler(){const e=this.view?.context?.mediaViewer?.seek,i=this.view?.queryResults?.getSelectedResult();if(!this.hass||!i||!e)return;const t=await(this.cameraManager?.getMediaSeekTime(this.hass,i,e))??null,a=this._getPlayer();a&&null!==t&&a.seek(t)}_renderMediaItem(e,i){return this.hass&&this.view&&this.viewerConfig?s` <div class="embla__slide">
      <frigate-card-viewer-provider
        .hass=${this.hass}
        .view=${this.view}
        .media=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .disabled=${this.viewerConfig.lazy_load}
        .cardWideConfig=${this.cardWideConfig}
        @frigate-card:media:loaded=${e=>{I(i,e)}}
      ></frigate-card-viewer-provider>
    </div>`:null}static get styles(){return r(".embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};o([d({attribute:!1})],L.prototype,"hass",void 0),o([d({attribute:!1})],L.prototype,"view",void 0),o([d({attribute:!1,hasChanged:p})],L.prototype,"viewerConfig",void 0),o([d({attribute:!1})],L.prototype,"resolvedMediaCache",void 0),o([d({attribute:!1})],L.prototype,"cardWideConfig",void 0),o([d({attribute:!1})],L.prototype,"cameraManager",void 0),L=o([l("frigate-card-viewer-carousel")],L);let U=class extends e{constructor(){super(...arguments),this.disabled=!1,this._refFrigateCardMediaPlayer=n(),this._refVideoProvider=n(),this._refImageProvider=n()}async play(){await T(this,this._refFrigateCardMediaPlayer.value??this._refVideoProvider.value)}async pause(){(this._refFrigateCardMediaPlayer.value||this._refVideoProvider.value)?.pause()}async mute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!0)}async unmute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!1)}isMuted(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.isMuted()??!0:!this._refVideoProvider.value||this._refVideoProvider.value.muted}async seek(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.seek(e);this._refVideoProvider.value&&(F(this._refVideoProvider.value),this._refVideoProvider.value.currentTime=e)}async setControls(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.setControls(e);this._refVideoProvider.value&&k(this._refVideoProvider.value,e??this.viewerConfig?.controls.builtin??!0)}isPaused(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value.isPaused():!this._refVideoProvider.value||this._refVideoProvider.value.paused}async getScreenshotURL(){return this._refFrigateCardMediaPlayer.value?await this._refFrigateCardMediaPlayer.value.getScreenshotURL():this._refVideoProvider.value?m(this._refVideoProvider.value):this._refImageProvider.value?this._refImageProvider.value.src:null}async _dispatchRelatedClipView(){if(!(this.hass&&this.view&&this.cameraManager&&this.media&&w.isEvent(this.media)&&y.areEventQueries(this.view.query)))return;const e=this.view.query.clone();e.convertToClipsQueries();const i=e.getQueries();if(!i)return;let t;try{t=await this.cameraManager.executeMediaQueries(this.hass,i)}catch(e){return void C(e)}if(!t)return;const a=new _(t);a.selectResultIfFound((e=>e.getID()===this.media?.getID())),a.hasSelectedResult()&&this.view.evolve({view:"media",query:e,queryResults:a}).dispatchChangeEvent(this)}willUpdate(e){const i=this.media?this.media.getContentID():null;!((e.has("disabled")||e.has("media")||e.has("viewerConfig")||e.has("resolvedMediaCache")||e.has("hass"))&&this.hass&&i)||this.resolvedMediaCache?.has(i)||this.viewerConfig?.lazy_load&&this.disabled||b(this.hass,i,this.resolvedMediaCache).then((()=>{this.requestUpdate()})),e.has("viewerConfig")&&this.viewerConfig?.zoomable&&import("./zoomer-1857311a.js")}_useZoomIfRequired(e){return this.viewerConfig?.zoomable?s` <frigate-card-zoomer
          @frigate-card:zoom:zoomed=${()=>this.setControls(!1)}
          @frigate-card:zoom:unzoomed=${()=>this.setControls()}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(this.disabled||!this.media||!this.hass||!this.view||!this.viewerConfig)return;const e=this.media.getContentID(),i=e?this.resolvedMediaCache?.get(e):null;return i?this._useZoomIfRequired(s`
      ${w.isVideo(this.media)?this.media.getVideoContentType()===E.HLS?s`<frigate-card-ha-hls-player
              ${g(this._refFrigateCardMediaPlayer)}
              allow-exoplayer
              aria-label="${this.media.getTitle()??""}"
              ?autoplay=${!1}
              controls
              muted
              playsinline
              title="${this.media.getTitle()??""}"
              url=${$(this.hass,i?.url)??""}
              .hass=${this.hass}
              ?controls=${this.viewerConfig.controls.builtin}
            >
            </frigate-card-ha-hls-player>`:s`
              <video
                ${g(this._refVideoProvider)}
                aria-label="${this.media.getTitle()??""}"
                title="${this.media.getTitle()??""}"
                muted
                playsinline
                crossorigin="anonymous"
                ?autoplay=${!1}
                ?controls=${this.viewerConfig.controls.builtin}
                @loadedmetadata=${e=>{e.target&&this.viewerConfig?.controls.builtin&&F(e.target,z)}}
                @loadeddata=${e=>{M(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:W(e.target)}})}}
                @volumechange=${()=>P(this)}
                @play=${()=>R(this)}
                @pause=${()=>x(this)}
              >
                <source
                  src=${$(this.hass,i?.url)??""}
                  type="video/mp4"
                />
              </video>
            `:s`<img
            ${g(this._refImageProvider)}
            aria-label="${this.media.getTitle()??""}"
            src="${$(this.hass,i?.url)??""}"
            title="${this.media.getTitle()??""}"
            @click=${()=>{this.viewerConfig?.snapshot_click_plays_clip&&this._dispatchRelatedClipView()}}
            @load=${e=>{M(this,e,{player:this})}}
          />`}
    `):a({cardWideConfig:this.cardWideConfig})}static get styles(){return r(":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nimg,\nvideo,\nfrigate-card-ha-hls-player {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n}\n\nfrigate-card-progress-indicator {\n  padding: 30px;\n  box-sizing: border-box;\n}")}};o([d({attribute:!1})],U.prototype,"hass",void 0),o([d({attribute:!1})],U.prototype,"view",void 0),o([d({attribute:!1})],U.prototype,"media",void 0),o([d({attribute:!1})],U.prototype,"viewerConfig",void 0),o([d({attribute:!1})],U.prototype,"resolvedMediaCache",void 0),o([d({attribute:!1})],U.prototype,"disabled",void 0),o([d({attribute:!1})],U.prototype,"cameraManager",void 0),o([d({attribute:!1})],U.prototype,"cardWideConfig",void 0),U=o([l(H)],U);export{D as FrigateCardViewer,L as FrigateCardViewerCarousel,U as FrigateCardViewerProvider};
