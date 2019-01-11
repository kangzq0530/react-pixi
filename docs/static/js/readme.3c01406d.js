(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./README.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),p=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(p.MDXTag,{name:"wrapper",components:n},o.a.createElement(p.MDXTag,{name:"h1",components:n,props:{id:"react-pixijs"}},"React PixiJS"),o.a.createElement(p.MDXTag,{name:"p",components:n},o.a.createElement(p.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/tested_with-jest-green.svg",alt:null}})," ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://circleci.com/gh/inlet/react-pixi-fiber"}},o.a.createElement(p.MDXTag,{name:"img",components:n,parentName:"a",props:{src:"https://img.shields.io/circleci/project/github/inlet/react-pixi/master.svg",alt:"CircleCI"}}))," ",o.a.createElement(p.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/license-MIT-green.svg",alt:null}})," ",o.a.createElement(p.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/code_style-prettier-blue.svg",alt:null}})," ",o.a.createElement(p.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/react-v16.6+-ff69b4.svg",alt:null}})," ",o.a.createElement(p.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/pixi-v4+-ff69b4.svg",alt:null}})),o.a.createElement(p.MDXTag,{name:"p",components:n},"Write ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://www.pixijs.com/"}},"PixiJS")," applications using React declarative style."),o.a.createElement(p.MDXTag,{name:"p",components:n},o.a.createElement(p.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://user-images.githubusercontent.com/232559/37669267-b46a8f8e-2c66-11e8-96e7-cae2ae6bdd7d.png",alt:null}})),o.a.createElement(p.MDXTag,{name:"p",components:n},"Collaborate on Github: ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/inlet/react-pixi"}},"https://github.com/inlet/react-pixi")),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"install"}},"Install"),o.a.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"node"}},"Node"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-npm",metaString:""}},"npm install @inlet/react-pixi --save\n")),o.a.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"browser"}},"Browser"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html",metaString:""}},'<script src="https://unpkg.com/@inlet/react-pixi@latest/dist/react-pixi.umd.js"><\/script>\n<script>\n  // window.ReactPixi\n<\/script>\n')),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),o.a.createElement(p.MDXTag,{name:"h4",components:n,props:{id:"with-react-dom"}},"With React-DOM"),o.a.createElement(p.MDXTag,{name:"p",components:n},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Stage")," renders a canvas element. All child components are rendered on the canvas."),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { Stage, Sprite } from '@inlet/react-pixi'\n\nconst App = () => (\n  <Stage>\n    <Sprite image=\"./bunny.png\" x={100} y={100} />\n  </Stage>\n)\n")),o.a.createElement(p.MDXTag,{name:"h4",components:n,props:{id:"without-react-dom"}},"Without React-DOM"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { render, Text } from '@inlet/react-pixi'\nimport * as PIXI from 'pixi.js'\n\n// init PIXI.Application manually\nconst app = new PIXI.Application(800, 600, {\n  backgroundColor: 0x10bb99,\n  view: document.getElementById('container')\n})\n\n// Use the custom renderer to render a valid PIXI object into a PIXI container.\nrender(<Text text=\"Hello World\" x={200} y={200} />, app.stage)\n")),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Watch the ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://codepen.io/collection/XPpGdb"}},"collection on codepen"),"."),o.a.createElement(p.MDXTag,{name:"ul",components:n},o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/zWEaoR"}},"Text")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/aYLvrZ"}},"Sprite - Rotating Bunny")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/rdGvQj"}},"Tiling Sprite")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/vRejPV"}},"Graphics")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/NYazPq"}},"Interaction - Click")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/RMLWxV"}},"Rope")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/RMLJKm"}},"Custom Components")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/JLrBqK"}},"NineSlicePlane")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/PRJdgg"}},"Custom Render - Without Stage"))),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"custom-components"}},"Custom Components"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Currently the following Components are implemented by default:"),o.a.createElement(p.MDXTag,{name:"ul",components:n},o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Container.html"}},"Container")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html"}},"ParticleContainer")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Sprite.html"}},"Sprite")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.extras.TilingSprite.html"}},"TilingSprite")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Graphics.html"}},"Graphics")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.mesh.Mesh.html"}},"Mesh")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.mesh.Rope.html"}},"Rope")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Text.html"}},"Text")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.extras.BitmapText.html"}},"BitmapText")),o.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.mesh.NineSlicePlane.html"}},"NineSlicePlane"))),o.a.createElement(p.MDXTag,{name:"p",components:n},"You can easily add new components to your project:"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// ./components/Rectangle.jsx\n\nimport * as PIXI from 'pixi.js'\nimport { PixiComponent } from '@inlet/react-pixi'\n\nexport default PixiComponent('Rectangle', {\n  create: props => {\n    return new PIXI.Graphics()\n  },\n  didMount: (instance, parent) => {\n    // apply custom logic on mount\n  },\n  willUnmount: (instance, parent) => {\n    // clean up before removal\n  },\n  applyProps: (instance, oldProps, newProps) => {\n    const { fill, x, y, width, height } = newProps\n    instance.clear()\n    instance.beginFill(fill)\n    instance.drawRect(x, y, width, height)\n    instance.endFill()\n  }\n})\n")),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// App.jsx\n\nimport { Stage } from '@inlet/react-pixi'\nimport Rectangle from './components/Rectangle'\nexport default () => (\n  <Stage>\n    <Rectangle x={100} \n               y={100} \n               width={500} \n               heigth={300} \n               fill={0xff0000} />\n  </Stage>\n)\n")),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"access-pixi-application"}},"Access PIXI Application"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Accessing the ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PIXI.Application")," instance in child components."),o.a.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"via-render-props-function-as-child"}},"Via Render Props (function as child)"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// App.jsx\n\nimport { Stage, Container, AppConsumer } from '@inlet/react-pixi'\nimport { RotatingBunny } from './components/RotatingBunny'\n\nexport default () => (\n  <Stage>\n    <Container>\n      <AppConsumer>\n        {app => <RotatingBunny app={app} />}\n      </AppConsumer>\n    </Container>\n  </Stage>\n)\n")),o.a.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"via-higher-order-component-withpixiapp"}},"Via Higher Order Component ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"withPixiApp")),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// App.jsx\n\nimport { Stage, Container, withPixiApp } from '@inlet/react-pixi'\nimport { RotatingBunny } from './components/RotatingBunny'\n\nconst BunnyWithApp = withPixiApp(RotatingBunny)\n\nexport default () => (\n  <Stage>\n    <Container>\n      <BunnyWithApp />\n    </Container>\n  </Stage>\n)\n")),o.a.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"use-hooks-api-in-functional-components"}},"Use hooks API in Functional Components"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Note that you can also use the ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useTick")," hook to listen for ticker events."),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// RotatingBunny.jsx\n\nimport { useApp } from '@inlet/react-pixi'\n\nfunction RotatingBunny(props) {\n  const app = useApp()\n  // app => PIXI.Application\n\n  return (\n    ...\n  )\n}\n")),o.a.createElement(p.MDXTag,{name:"p",components:n},"The ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"RotatingBunny")," class component could look something like this:"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// ./components/RotatingBunny.jsx\n\nimport { Sprite } from '@inlet/react-pixi'\n\nclass RotatingBunny extends React.Component {\n\n  state = { rotation: 0 }\n\n  componentDidMount() {\n    // listen to tick events (raf)\n    this.props.app.ticker.add(this.tick)\n  }\n  \n  componentWillUnmount() {\n    // stop listening for tick events\n    this.props.app.ticker.remove(this.tick)\n  }\n  \n  tick = (delta) => {\n      // rotate this sucker \ud83d\ude4c\n      this.setState(({ rotation }) => ({\n          rotation: rotation + 0.1 * delta\n      }))\n  };\n  \n  render() {\n    return <Sprite image=\"./bunny.png\" rotation={this.state.rotation} />\n  }\n}\n")),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"stage"}},"Stage"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Renders a ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PIXI.Application")," in a prebuilt React component using React-DOM."),o.a.createElement(p.MDXTag,{name:"p",components:n},"See ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/#usage"}},"Usage")),o.a.createElement(p.MDXTag,{name:"p",components:n},"Example:"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { render } from 'react-dom'\nimport { Stage, Container } from '@inlet/react-pixi'\n\nconst App = () => (\n  <Stage width={500} height={400} options={{ backgroundColor: 0xff0000 }}>\n    <Container></Container>\n  </Stage>\n)\n\nrender(<App />, document.getElementById('root'))\n")),o.a.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"props"}},"Props"),o.a.createElement(p.MDXTag,{name:"table",components:n},o.a.createElement(p.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),o.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"),o.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default value"))),o.a.createElement(p.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"width")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the width of the renderers view"),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"800"))),o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"height")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the height of the renderers view"),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"800"))),o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onMount")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"callback function for the created app instance"),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onUnMount")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"callback function when the Stage gets unmounted"),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"raf")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"use the internal PIXI ticker (requestAnimationFrame)"),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true"))),o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"renderOnComponentChange")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"render stage on Stage changes? only useful in combination with ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"raf")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true"))),o.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"see ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"http://pixijs.download/release/docs/PIXI.Application.html"}},"PIXI.Application options")),o.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})))),o.a.createElement(p.MDXTag,{name:"p",components:n},"The Stage stores the created ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PIXI.Application")," instance to context, which can be accessed using a ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/#access-pixi-application"}},"Provider or a Higher\nOrder Component"),"."),o.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"components"}},"Components"),o.a.createElement(p.MDXTag,{name:"p",components:n},"Pass down PIXI options as props. Reference the ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/dev/docs/index.html"}},"PIXI documentation")," to see what properties can be applied."),o.a.createElement(p.MDXTag,{name:"p",components:n},"For example The Sprite can have ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/dev/docs/PIXI.Sprite.html#x"}},"x")," and ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/dev/docs/PIXI.Sprite.html#x"}},"y")," values as writable members:"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { Sprite } from '@inlet/react-pixi'\n\nconst MyComponent = () => (\n  <Sprite image=\".image.png\" x={100} y={200} />\n)\n")),o.a.createElement(p.MDXTag,{name:"p",components:n},"The ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"image")," prop here is shorthand for ",o.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/release/docs/PIXI.Sprite.html#.fromImage"}},o.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"PIXI.Sprite.fromImage()")),":"),o.a.createElement(p.MDXTag,{name:"pre",components:n},o.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { Sprite } from '@inlet/react-pixi'\n\nconst texture = new PIXI.Sprite.fromImage('./image.png')\n\nconst MyComponent = () => (\n  <Sprite texture={texture} x={100} y={200} />\n)\n")))}}}]);