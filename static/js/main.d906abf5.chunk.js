(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){e.exports={Container:"Container_Container__3tQ9A"}},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(8),r=n.n(s),o=n(3),i=n(4),b=n(6),u=n(5),d=(n(14),n(15),n(0)),l=function(e){var t=e.children;return Object(d.jsx)("div",{className:"Container",children:t})},j=n(9),p=n(1),h=n.n(p),v=(n(19),function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.countTotalFeedback,s=e.countPositiveFeedbackPercentage;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{}),Object(d.jsxs)("p",{className:"statistic",children:["Good:",t]}),Object(d.jsxs)("p",{className:"statistic",children:["Neutral:",n]}),Object(d.jsxs)("p",{className:"statistic",children:["Bad: ",a]}),Object(d.jsxs)("p",{className:"statistic",children:["All feedbacks:",c," "]}),Object(d.jsxs)("p",{className:"statistic",children:["Just positive feedbacks:",s,"%"]})]})}),O=function(e){var t=e.options,n=e.onLeaveFeedback,a=(e.voice,Object.keys(t));return Object(d.jsx)("div",{className:"button-wrap",children:a.map((function(e){return Object(d.jsx)("button",{type:"button",onClick:n,children:e},e)}))})},f=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{className:"Statistics_title ",children:t}),n]})},x=function(e){var t=e.message;return Object(d.jsx)("p",{className:"statistic notification",children:t})},m=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.textContent;e.setState((function(e){return Object(j.a)({},n.toLowerCase(),e[n.toLowerCase()]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.bad+t.good+t.neutral},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.round(100*t/n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:"Please leave feedback",children:Object(d.jsx)(O,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(d.jsx)(f,{title:"Statistics",children:c>=1&&Object(d.jsx)(v,{good:t,neutral:n,bad:a,countTotalFeedback:c,countPositiveFeedbackPercentage:s})}),0===c&&Object(d.jsx)(x,{message:"No feedback given"})]})}}]),n}(a.Component);f.propTypes={title:h.a.string.isRequired},O.propTypes={state:h.a.object,onLeaveFeedback:h.a.func},v.propTypes={good:h.a.number,neutral:h.a.number,bad:h.a.number,totalVoice:h.a.number,goodRate:h.a.number},x.propTypes={message:h.a.string};var k=m,g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l,{children:Object(d.jsx)(k,{})})})}}]),n}(a.Component);n(20),n(21);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d906abf5.chunk.js.map