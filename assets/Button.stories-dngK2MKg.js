import{j as i}from"./jsx-runtime-AgcCsxC8.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const t=({text:o,onClick:l,...s})=>i.jsx("button",{className:"Button",...s,onClick:l,children:o});try{t.displayName="Button",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{size:{defaultValue:null,description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},text:{defaultValue:null,description:"Button contents",name:"text",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const d={title:"Example/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{text:"Hola mundo",onClick(){alert(`El texto del boton es: ${this.text}`)}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: 'Hola mundo',
    onClick() {
      alert(\`El texto del boton es: \${this.text}\`);
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const p=["Primary"];export{e as Primary,p as __namedExportsOrder,d as default};
