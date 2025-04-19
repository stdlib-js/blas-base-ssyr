"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var R=d(function(A,T){
var B=require('@stdlib/ndarray-base-assert-is-row-major/dist'),p=require('@stdlib/number-float64-base-to-float32/dist');function C(a,r,e,i,u,m,o,n,t,g){var l,c,w,s,y,E,f,v,x,b;if(l=B([n,t]),l?(y=t,E=n):(y=n,E=t),b=m,l&&a==="lower"||!l&&a==="upper"){for(s=b,v=0;v<r;v++){if(i[s]!==0)for(c=p(e*i[s]),x=g+E*v,w=b,f=0;f<=v;f++)o[x+y*f]+=p(i[w]*c),w+=u;s+=u}return o}for(s=b,v=0;v<r;v++){if(i[s]!==0)for(c=p(e*i[s]),x=g+E*v,w=s,f=v;f<r;f++)o[x+y*f]+=p(i[w]*c),w+=u;s+=u}return o}T.exports=C
});var z=d(function(rr,j){
var G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/blas-base-assert-is-layout/dist'),I=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),J=require('@stdlib/strided-base-stride2offset/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),K=R();function P(a,r,e,i,u,m,o,n){var t,g,l;if(!H(a))throw new TypeError(h('1yjFx',a));if(!I(r))throw new TypeError(h('1yjGA',r));if(e<0)throw new RangeError(h('1yjFz',e));if(m===0)throw new RangeError(h('1yjGB',m));if(n<G(1,e))throw new RangeError(h('1yjGM',e,n));return e===0||i===0?o:(a==="column-major"?(t=1,g=n):(t=n,g=1),l=J(e,m),K(r,e,i,u,m,l,o,t,g,0))}j.exports=P
});var M=d(function(er,F){
var Q=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),U=R();function W(a,r,e,i,u,m,o,n,t,g){if(!Q(a))throw new TypeError(q('1yjGN',a));if(r<0)throw new RangeError(q('1yjGE',r));if(u===0)throw new RangeError(q('1yjGF',u));if(n===0)throw new RangeError(q('1yjG0',n));if(t===0)throw new RangeError(q('1yjGS',t));return r===0||e===0?o:U(a,r,e,i,u,m,o,n,t,g)}F.exports=W
});var O=d(function(ar,_){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=z(),Z=M();Y(S,"ndarray",Z);_.exports=S
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),X=O(),V,k=L($(__dirname,"./native.js"));D(k)?V=X:V=k;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
