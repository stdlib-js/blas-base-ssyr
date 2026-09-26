"use strict";var d=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var R=d(function(A,x){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist');function k(n,r,e,i,o,g,v,a,t,f){var s,l,w,m,y,p,h,u,q,b;if(s=O([a,t]),s?(y=t,p=a):(y=a,p=t),b=g,!s&&n==="upper"||s&&n==="lower"){for(m=b,u=0;u<r;u++){if(i[m]!==0)for(l=e*i[m],q=f+p*u,w=b,h=0;h<=u;h++)v[q]+=i[w]*l,w+=o,q+=y;m+=o}return v}for(m=b,u=0;u<r;u++){if(i[m]!==0)for(l=e*i[m],q=f+p*u+y*u,w=m,h=u;h<r;h++)v[q]+=i[w]*l,w+=o,q+=y;m+=o}return v}x.exports=k
});var S=d(function(rr,j){
var B=require('@stdlib/math-base-special-fast-max/dist'),G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),I=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),J=require('@stdlib/strided-base-stride2offset/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),K=R();function P(n,r,e,i,o,g,v,a){var t,f,s,l;if(!G(n))throw new TypeError(c('1yjFx',n));if(l=H(r),l===null)throw new TypeError(c('1yjGA',r));if(e<0)throw new RangeError(c('1yjFz',e));if(g===0)throw new RangeError(c('1yjGB',g));if(a<B(1,e))throw new RangeError(c('1yjGM',e,a));return e===0||i===0?v:(I(n)?(t=1,f=a):(t=a,f=1),s=J(e,g),K(l,e,i,o,g,s,v,t,f,0))}j.exports=P
});var T=d(function(er,z){
var Q=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),U=R();function W(n,r,e,i,o,g,v,a,t,f){var s=Q(n);if(s===null)throw new TypeError(E('1yjGN',n));if(r<0)throw new RangeError(E('1yjGE',r));if(o===0)throw new RangeError(E('1yjGF',o));if(a===0)throw new RangeError(E('1yjG0',a));if(t===0)throw new RangeError(E('1yjGS',t));return r===0||e===0?v:U(s,r,e,i,o,g,v,a,t,f)}z.exports=W
});var _=d(function(ar,M){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=S(),Z=T();Y(F,"ndarray",Z);M.exports=F
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),X=_(),V,C=L($(__dirname,"./native.js"));D(C)?V=X:V=C;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
