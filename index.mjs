// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-max@v0.3.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-matrix-triangle@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";function m(e,r,t,n,s,i,m,d,l,u){var f,g,h,p,v,j,b,w,c,x;if((f=a([d,l]))?(v=l,j=d):(v=d,j=l),x=i,f&&"lower"===e||!f&&"upper"===e){for(p=x,w=0;w<r;w++){if(0!==n[p])for(g=o(t*n[p]),c=u+j*w,h=x,b=0;b<=w;b++)m[c+v*b]+=o(n[h]*g),h+=s;p+=s}return m}for(p=x,w=0;w<r;w++){if(0!==n[p])for(g=o(t*n[p]),c=u+j*w,h=p,b=w;b<r;b++)m[c+v*b]+=o(n[h]*g),h+=s;p+=s}return m}function d(e,a,o,d,l,u,f,g){var h,p;if(!t(e))throw new TypeError(i("invalid argument. First argument must be a valid order. Value: `%s`.",e));if(!n(a))throw new TypeError(i("invalid argument. Second argument must specify whether to reference the lower or upper triangular matrix. Value: `%s`.",a));if(o<0)throw new RangeError(i("invalid argument. Third argument must be a nonnegative integer. Value: `%d`.",o));if(0===u)throw new RangeError(i("invalid argument. Sixth argument must be non-zero. Value: `%d`.",u));if(g<r(1,o))throw new RangeError(i("invalid argument. Eighth argument must be greater than or equal to max(1,%d). Value: `%d`.",o,g));return 0===o||0===d?f:("column-major"===e?(h=1,p=g):(h=g,p=1),m(a,o,d,l,u,s(o,u),f,h,p,0))}function l(e,r,t,s,a,o,d,l,u,f){if(!n(e))throw new TypeError(i("invalid argument. First argument must specify whether to reference the lower or upper triangular matrix. Value: `%s`.",e));if(r<0)throw new RangeError(i("invalid argument. Second argument must be a nonnegative integer. Value: `%d`.",r));if(0===a)throw new RangeError(i("invalid argument. Fifth argument must be non-zero. Value: `%d`.",a));return 0===r||0===t?d:m(e,r,t,s,a,o,d,l,u,f)}e(d,"ndarray",l);export{d as default,l as ndarray};
//# sourceMappingURL=index.mjs.map
