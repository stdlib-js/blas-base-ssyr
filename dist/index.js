"use strict";var p=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var b=p(function(A,T){
var B=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/number-float64-base-to-float32/dist');function C(a,r,e,i,n,m,t,u,s,f){var l,h,w,v,c,y,g,o,x,d;if(l=B([u,s]),l?(c=s,y=u):(c=u,y=s),d=m,l&&a==="lower"||!l&&a==="upper"){for(v=d,o=0;o<r;o++){if(i[v]!==0)for(h=E(e*i[v]),x=f+y*o,w=d,g=0;g<=o;g++)t[x+c*g]+=E(i[w]*h),w+=n;v+=n}return t}for(v=d,o=0;o<r;o++){if(i[v]!==0)for(h=E(e*i[v]),x=f+y*o,w=v,g=o;g<r;g++)t[x+c*g]+=E(i[w]*h),w+=n;v+=n}return t}T.exports=C
});var F=p(function(rr,j){
var G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/blas-base-assert-is-layout/dist'),I=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),J=require('@stdlib/strided-base-stride2offset/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),K=b();function P(a,r,e,i,n,m,t,u){var s,f,l;if(!H(a))throw new TypeError(q('1yjFx',a));if(!I(r))throw new TypeError(q('1yjGA',r));if(e<0)throw new RangeError(q('1yjFz',e));if(m===0)throw new RangeError(q('1yjGB',m));if(u<G(1,e))throw new RangeError(q('1yjGM',e,u));return e===0||i===0?t:(a==="column-major"?(s=1,f=u):(s=u,f=1),l=J(e,m),K(r,e,i,n,m,l,t,s,f,0))}j.exports=P
});var S=p(function(er,M){
var Q=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),U=b();function W(a,r,e,i,n,m,t,u,s,f){if(!Q(a))throw new TypeError(R('1yjGN',a));if(r<0)throw new RangeError(R('1yjGE',r));if(n===0)throw new RangeError(R('1yjGF',n));return r===0||e===0?t:U(a,r,e,i,n,m,t,u,s,f)}M.exports=W
});var O=p(function(ar,_){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=F(),Z=S();Y(z,"ndarray",Z);_.exports=z
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),X=O(),V,k=L($(__dirname,"./native.js"));D(k)?V=X:V=k;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
