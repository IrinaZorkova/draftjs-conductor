(this["webpackJsonpdraftjs-conductor"]=this["webpackJsonpdraftjs-conductor"]||[]).push([[0],{169:function(t,e,n){},170:function(t,e,n){},171:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(16),i=n.n(a),s=(n(71),n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(3));const l=t=>{const e=t.getDepth();return e>4?"".concat("public-DraftStyleDefault-depth").concat(String(e)):""},c=(t,e)=>{let n;if(t){const o=Object(s.convertFromRaw)(t);n=s.EditorState.createWithContent(o,e)}else n=s.EditorState.createEmpty(e);return n},d=t=>{const e=t.getCurrentContent(),n=Object(s.convertToRaw)(e);return n.blocks.every(t=>0===t.text.trim().length&&(!t.entityRanges||0===t.entityRanges.length)&&(!t.inlineStyleRanges||0===t.inlineStyleRanges.length))?null:n};var u=n(19),h=n.n(u),p=n(39),m=n.n(p);const y="data-draftjs-conductor-fragment",g='[data-contents="true"] [contenteditable="false"]',E=(t,e)=>{const n=window.getSelection();if(!e.clipboardData||0===n.rangeCount||(t=>{const e=t.anchorNode,n=t.focusNode;if(!e||!n)return!1;const o=e instanceof Element?e:e.parentElement,r=n instanceof Element?n:n.parentElement,a=o&&o.closest(g),i=r&&r.closest(g);return a&&i&&(a.contains(i)||i.contains(a))})(n))return;const o=((t,e)=>{const n=m()(t,e).selectionState,o=h()(t.getCurrentContent(),n);return o.every(t=>0===t.getText().length)?null:o})(t._latestEditorState,t.editor);if(o){const t=s.ContentState.createFromBlockArray(o.toArray()),r=JSON.stringify(Object(s.convertToRaw)(t)),a=document.createElement("div");a.appendChild(n.getRangeAt(0).cloneContents()),a.setAttribute(y,r),a.setAttribute("style","white-space: pre-wrap;"),e.clipboardData.setData("text/plain",n.toString()),e.clipboardData.setData("text/html",a.outerHTML),e.preventDefault()}};class b extends o.Component{constructor(t){super(t),this.state={error:null}}componentDidCatch(t,e){const n=!!window.Raven;this.setState({error:t}),n&&window.Raven.captureException(t,{extra:e})}render(){const t=this.props.children,e=this.state.error,n=!!window.Raven;return e?r.a.createElement("div",{className:"DraftEditor-root"},r.a.createElement("div",{className:"DraftEditor-editorContainer"},r.a.createElement("div",{className:"public-DraftEditor-content"},r.a.createElement("div",{className:"u-text-center"},r.a.createElement("p",null,"Oops. The editor just crashed."),r.a.createElement("p",null,"Our team has been notified. You can provide us with more information if you want to."),r.a.createElement("div",null,n?r.a.createElement("button",{type:"button",onClick:()=>window.Raven.lastEventId()&&window.Raven.showReportDialog()},"Submit a report"):r.a.createElement("a",{href:"https://github.com/thibaudcolas/draftjs-conductor/issues",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline"}},"Open a GitHub issue"),r.a.createElement("span",null,"\xa0"),r.a.createElement("button",{type:"button",onClick:()=>window.location.reload(!1)},"Reload the page")))))):t}}var f=b;const k=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)};var S=({value:t})=>r.a.createElement("pre",{style:{position:"relative"}},r.a.createElement("button",{onClick:k.bind(null,t),style:{position:"absolute",right:"1rem"}},"Copy"),r.a.createElement("code",null,t));const C=(t,e,n)=>{t.findEntityRanges(t=>{const e=t.getEntity();return null!==e&&"LINK"===n.getEntity(e).getType()},e)};var v=({contentState:t,entityKey:e,children:n})=>{const o=t.getEntity(e);return r.a.createElement("span",{className:"link",title:o.getData().url},n)};var w=({block:t,contentState:e})=>{const n=t.getEntityAt(0),o=n?e.getEntity(n).getData().src:"/404";return r.a.createElement("div",null,r.a.createElement("p",null,"Image:"),r.a.createElement("img",{src:o,alt:"",width:"256"}))};n(170);var x=({block:t,contentState:e})=>{const n=t.getEntityAt(0),o=n?e.getEntity(n).getData().text:"Placeholder";return r.a.createElement("div",{className:"Snippet",contentEditable:!1},"This is a snippet block:",r.a.createElement("div",{className:"Snippet__text",contentEditable:!1},o))};var R=t=>{const e=t.getCurrentContent(),n=t.getSelection();if(n.isCollapsed())return s.RichUtils.insertSoftNewline(t);let o=s.Modifier.removeRange(e,n,"forward");const r=o.getSelectionAfter(),a=o.getBlockForKey(r.getStartKey());return o=s.Modifier.insertText(o,r,"\n",a.getInlineStyleAt(r.getStartOffset()),null),s.EditorState.push(t,o,"insert-fragment")};n(169);const D=r.a.memo(t=>{const e=t.max;return e>4?r.a.createElement("style",null,((t,e,n)=>{let o="";for(let r=e;r<=n;r++){const e=String(r),n="".concat(t).concat(e),a="ol".concat(e),i=String(1.5*(r+1));o+="\n.".concat(n,".public-DraftStyleDefault-listLTR { margin-left: ").concat(i,"em; }\n.").concat(n,".public-DraftStyleDefault-listRTL { margin-right: ").concat(i,"em; }\n.").concat(n,".public-DraftStyleDefault-orderedListItem::before { content: counter(").concat(a,") '. '; counter-increment: ").concat(a,"; }\n.").concat(n,".public-DraftStyleDefault-reset { counter-reset: ").concat(a,"; }")}return o})("public-DraftStyleDefault-depth",5,e)):null}),T={unstyled:"P","unordered-list-item":"UL","ordered-list-item":"OL","header-one":"H1","header-two":"H2","header-three":"H3","code-block":"{ }"},L={unstyled:"P","unordered-list-item":"UL","ordered-list-item":"OL","header-one":"H1","header-two":"H2","header-three":"H3","header-four":"H4","header-five":"H5","header-six":"H6",blockquote:"\u275d","code-block":"{ }"},O={BOLD:"B",ITALIC:"I"},A={BOLD:"B",ITALIC:"I",CODE:"`",STRIKETHROUGH:"~",UNDERLINE:"_"},I=[{type:"LINK",label:"\ud83d\udd17",attributes:["url"],whitelist:{href:"^(http:|https:|undefined$)"}},{type:"IMAGE",label:"\ud83d\udcf7",attributes:["src"],whitelist:{src:"^http"}},{type:"SNIPPET",label:"\ud83c\udf31",attributes:["text"],whitelist:{}},{type:"HORIZONTAL_RULE",label:"HR",attributes:[],whitelist:{}}];class N extends o.Component{constructor(t){super(t);const e=t.rawContentState,n=new s.CompositeDecorator([{strategy:C,component:v}]);this.state={editorState:c(e,n),readOnly:!1},this.onChange=this.onChange.bind(this),this.onTab=this.onTab.bind(this),this.addBR=this.addBR.bind(this),this.toggleReadOnly=this.toggleReadOnly.bind(this),this.toggleStyle=this.toggleStyle.bind(this),this.toggleBlock=this.toggleBlock.bind(this),this.toggleEntity=this.toggleEntity.bind(this),this.blockRenderer=this.blockRenderer.bind(this),this.handlePastedText=this.handlePastedText.bind(this)}componentDidMount(){this.copySource=(t=>{const e=t.editor,n=E.bind(null,t);return e.addEventListener("copy",n),e.addEventListener("cut",n),{unregister(){e.removeEventListener("copy",n),e.removeEventListener("cut",n)}}})(this.editorRef)}componentWillUnmount(){this.copySource.unregister()}onChange(t){this.setState({editorState:t})}toggleStyle(t,e){const n=this.state.editorState;this.onChange(s.RichUtils.toggleInlineStyle(n,t)),e.preventDefault()}toggleBlock(t,e){const n=this.state.editorState;this.onChange(s.RichUtils.toggleBlockType(n,t)),e.preventDefault()}toggleEntity(t){const e=this.state.editorState;let n=e.getCurrentContent();if("IMAGE"===t){n=n.createEntity(t,"IMMUTABLE",{src:"https://thibaudcolas.github.io/draftjs-conductor/wysiwyg-magic-wand.png"});const o=n.getLastCreatedEntityKey();this.onChange(s.AtomicBlockUtils.insertAtomicBlock(e,o," "))}else if("SNIPPET"===t){n=n.createEntity(t,"IMMUTABLE",{text:"Content of the snippet goes here"});const o=n.getLastCreatedEntityKey();this.onChange(s.AtomicBlockUtils.insertAtomicBlock(e,o," "))}else if("HORIZONTAL_RULE"===t){n=n.createEntity(t,"IMMUTABLE",{});const o=n.getLastCreatedEntityKey();this.onChange(s.AtomicBlockUtils.insertAtomicBlock(e,o," "))}else{n=n.createEntity(t,"MUTABLE",{url:"http://www.example.com/"});const o=n.getLastCreatedEntityKey(),r=e.getSelection();this.onChange(s.RichUtils.toggleLink(e,r,o))}}blockRenderer(t){const e=this.state.editorState.getCurrentContent();if("atomic"!==t.getType())return null;const n=t.getEntityAt(0);if(!n)return{editable:!1};const o=e.getEntity(n);return"HORIZONTAL_RULE"===o.getType()?{component:()=>r.a.createElement("hr",null),editable:!1}:"SNIPPET"===o.getType()?{component:x,editable:!1}:{component:w,editable:!1}}handlePastedText(t,e,n){let o=((t,e)=>{if(""===t||"undefined"===typeof t||null===t)return!1;const n=(new DOMParser).parseFromString(t,"text/html").querySelector("[".concat(y,"]"));if(n){const t=n.getAttribute(y);let r;try{r=JSON.parse(t)}catch(o){return!1}const a=Object(s.convertFromRaw)(r).getBlockMap(),i=s.Modifier.replaceWithFragment(e.getCurrentContent(),e.getSelection(),a);return s.EditorState.push(e,i,"insert-fragment")}return!1})(e,n);return!!o&&(this.onChange(o),!0)}onTab(t){const e=this.state.editorState,n=s.RichUtils.onTab(t,e,15);this.onChange(n)}addBR(t){const e=this.state.editorState;this.onChange(R(e)),t.preventDefault()}toggleReadOnly(t){this.setState(({readOnly:t})=>({readOnly:!t})),t.preventDefault()}render(){const t=this.props.extended,e=this.state,n=e.editorState,o=e.readOnly,a=t?A:O,i=t?L:T;return r.a.createElement("div",{className:"DemoEditor"},r.a.createElement(f,null,r.a.createElement("div",{className:"EditorToolbar"},Object.keys(a).map(t=>r.a.createElement("button",{key:t,onMouseDown:this.toggleStyle.bind(this,t)},A[t])),Object.keys(i).map(t=>r.a.createElement("button",{key:t,onMouseDown:this.toggleBlock.bind(this,t)},L[t])),I.map(t=>r.a.createElement("button",{key:t.type,onMouseDown:this.toggleEntity.bind(this,t.type)},t.label)),r.a.createElement("button",{onMouseDown:this.addBR},"BR"),r.a.createElement("button",{onMouseDown:this.toggleReadOnly},o?"\ud83d\udcd5":"\ud83d\udcd6")),r.a.createElement(s.Editor,{ref:t=>{this.editorRef=t},editorState:n,readOnly:o,onChange:this.onChange,stripPastedStyles:!1,blockRendererFn:this.blockRenderer,blockStyleFn:l,onTab:this.onTab,handlePastedText:this.handlePastedText})),r.a.createElement(D,{max:15}),r.a.createElement("details",null,r.a.createElement("summary",null,r.a.createElement("span",{className:"link"},"Debug")),r.a.createElement(S,{value:JSON.stringify(d(n),null,2)})))}}N.defaultProps={rawContentState:null};var B=N;const M={blocks:[{key:"8qfte",text:"Copy this content",type:"header-two"},{key:"6m80m",text:" ",type:"atomic",entityRanges:[{offset:0,length:1,key:0}]},{key:"c0ala",text:"",type:"unstyled"},{key:"7knr3",text:"From here",type:"header-three"},{key:"er6ke",text:"To the editor below!",type:"unordered-list-item"},{key:"47a3o",text:" ",type:"atomic",entityRanges:[{offset:0,length:1,key:1}]},{key:"826u0",text:"Numbered list",type:"ordered-list-item"}],entityMap:{0:{type:"HORIZONTAL_RULE",mutability:"IMMUTABLE",data:{}},1:{type:"SNIPPET",mutability:"IMMUTABLE",data:{text:"Content of the snippet goes here"}}}},U={blocks:[{key:"ako0c",text:"Infinite",type:"unordered-list-item",depth:0},{key:"adreo",text:"Nested",type:"unordered-list-item",depth:1},{key:"bm3ec",text:"List",type:"unordered-list-item",depth:2},{key:"aqg1s",text:"Nesting",type:"unordered-list-item",depth:3},{key:"4dns4",text:"Styles",type:"unordered-list-item",depth:4},{key:"5k6tv",text:"Work",type:"unordered-list-item",depth:5},{key:"9htu8",text:"For",type:"unordered-list-item",depth:6},{key:"at7om",text:"As",type:"unordered-list-item",depth:7},{key:"8fddl",text:"Many",type:"unordered-list-item",depth:8},{key:"2ja3i",text:"Levels",type:"unordered-list-item",depth:9},{key:"cv49i",text:"As",type:"unordered-list-item",depth:10},{key:"4aoq9",text:"Configured",type:"unordered-list-item",depth:11},{key:"d4hhk",text:"Here",type:"unordered-list-item",depth:12},{key:"bbeuk",text:"Up",type:"unordered-list-item",depth:13},{key:"6s9a8",text:"To",type:"unordered-list-item",depth:14},{key:"48sq1",text:"15!",type:"unordered-list-item",depth:15}],entityMap:{}};class H extends o.Component{render(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Idempotent copy-paste between editors"),r.a.createElement("p",null,"The default Draft.js copy-paste handlers lose a lot of the formatting when copy-pasting between Draft.js editors. While this might be ok for some use cases, sites with multiple editors on the same page need them to reliably support copy-paste."),r.a.createElement(B,{extended:!0,rawContentState:M}),r.a.createElement(B,{extended:!1}),r.a.createElement("h2",null,"Infinite list nesting"),r.a.createElement("p",null,"By default, Draft.js only provides support for 5 list levels for bulleted and numbered lists. While this is often more than enough, some editors need to go further. This provides infinite list nesting styles."),r.a.createElement(B,{extended:!1,rawContentState:U}))}}var P=H;const j=document.getElementById("root");j&&i.a.render(r.a.createElement(P,null),j)},66:function(t,e,n){t.exports=n(171)},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.acb929fd.chunk.js.map