"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var R=d(function(rr,T){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist'),p=require('@stdlib/number-float64-base-to-float32/dist');function B(a,r,e,i,u,m,o,n,t,g){var l,y,w,s,c,E,f,v,x,b;if(l=k([n,t]),l?(c=t,E=n):(c=n,E=t),b=m,l&&a==="lower"||!l&&a==="upper"){for(s=b,v=0;v<r;v++){if(i[s]!==0)for(y=p(e*i[s]),x=g+E*v,w=b,f=0;f<=v;f++)o[x+c*f]+=p(i[w]*y),w+=u;s+=u}return o}for(s=b,v=0;v<r;v++){if(i[s]!==0)for(y=p(e*i[s]),x=g+E*v,w=s,f=v;f<r;f++)o[x+c*f]+=p(i[w]*y),w+=u;s+=u}return o}T.exports=B
});var z=d(function(er,j){
var G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/blas-base-assert-is-layout/dist'),I=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),J=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),K=require('@stdlib/strided-base-stride2offset/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),P=R();function Q(a,r,e,i,u,m,o,n){var t,g,l;if(!H(a))throw new TypeError(h('1yjFx',a));if(!I(r))throw new TypeError(h('1yjGA',r));if(e<0)throw new RangeError(h('1yjFz',e));if(m===0)throw new RangeError(h('1yjGB',m));if(n<G(1,e))throw new RangeError(h('1yjGM',e,n));return e===0||i===0?o:(J(a)?(t=1,g=n):(t=n,g=1),l=K(e,m),P(r,e,i,u,m,l,o,t,g,0))}j.exports=Q
});var F=d(function(ar,M){
var U=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),W=R();function Y(a,r,e,i,u,m,o,n,t,g){if(!U(a))throw new TypeError(q('1yjGN',a));if(r<0)throw new RangeError(q('1yjGE',r));if(u===0)throw new RangeError(q('1yjGF',u));if(n===0)throw new RangeError(q('1yjG0',n));if(t===0)throw new RangeError(q('1yjGS',t));return r===0||e===0?o:W(a,r,e,i,u,m,o,n,t,g)}M.exports=Y
});var C=d(function(nr,_){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=z(),$=F();Z(S,"ndarray",$);_.exports=S
});var L=require("path").join,D=require('@stdlib/utils-try-require/dist'),X=require('@stdlib/assert-is-error/dist'),N=C(),V,O=D(L(__dirname,"./native.js"));X(O)?V=N:V=O;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
