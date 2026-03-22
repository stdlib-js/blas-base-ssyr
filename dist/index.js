"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=d(function(A,V){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist');function k(a,r,e,i,o,m,v,n,t,g){var f,E,l,s,q,x,w,u,h,b;if(f=O([n,t]),f?(q=t,x=n):(q=n,x=t),b=m,!f&&a==="upper"||f&&a==="lower"){for(s=b,u=0;u<r;u++){if(i[s]!==0)for(E=e*i[s],h=g+x*u,l=b,w=0;w<=u;w++)v[h]+=i[l]*E,l+=o,h+=q;s+=o}return v}for(s=b,u=0;u<r;u++){if(i[s]!==0)for(E=e*i[s],h=g+x*u+q*u,l=s,w=u;w<r;w++)v[h]+=i[l]*E,l+=o,h+=q;s+=o}return v}V.exports=k
});var j=d(function(rr,T){
var B=require('@stdlib/math-base-special-fast-max/dist'),G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),I=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),J=require('@stdlib/strided-base-stride2offset/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),K=p();function P(a,r,e,i,o,m,v,n){var t,g,f;if(!G(a))throw new TypeError(y('1yjFx',a));if(!H(r))throw new TypeError(y('1yjGA',r));if(e<0)throw new RangeError(y('1yjFz',e));if(m===0)throw new RangeError(y('1yjGB',m));if(n<B(1,e))throw new RangeError(y('1yjGM',e,n));return e===0||i===0?v:(I(a)?(t=1,g=n):(t=n,g=1),f=J(e,m),K(r,e,i,o,m,f,v,t,g,0))}T.exports=P
});var M=d(function(er,z){
var Q=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),U=p();function W(a,r,e,i,o,m,v,n,t,g){if(!Q(a))throw new TypeError(c('1yjGN',a));if(r<0)throw new RangeError(c('1yjGE',r));if(o===0)throw new RangeError(c('1yjGF',o));if(n===0)throw new RangeError(c('1yjG0',n));if(t===0)throw new RangeError(c('1yjGS',t));return r===0||e===0?v:U(a,r,e,i,o,m,v,n,t,g)}z.exports=W
});var _=d(function(ar,S){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=j(),Z=M();Y(F,"ndarray",Z);S.exports=F
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),X=_(),R,C=L($(__dirname,"./native.js"));D(C)?R=X:R=C;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
