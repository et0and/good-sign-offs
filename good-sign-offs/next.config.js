module.exports = {
       async rewrites() {
         return [
           {
             source: '/good-sign-offs/:path*',
             destination: '/:path*',
           },
         ];
       },
     };
