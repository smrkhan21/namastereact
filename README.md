# EPO2 - Igniting our App

(1) *What is NPM?* 

1. not stands for node package manager it has no full from
2. It contains all the packages
3. It is used to manage our packages
4. command: npm install, npm init etc.

(2) *To ignite our app and create package.json file we need to run "npm init" command*

(3) *What is Package.json?*

Package.json file is a configuration file for npm. It keeps track of dependencies installed into our app.
We need this file to add/install package/dependencies into our app


(4) *What is Package.lock.json?*

It holds the exact version of dependcies installed into our app.
It maintain integrity through different systems using SHA512 hash codes.

Refer this to know the difference between above two: https://reactdotjs.blogspot.com/2023/09/packagejson-vs-packagelockjson.html



(5) *What is Bundler?*

Bundler is a tool which bundles HTML, CSS, JS code and make our app optimzed by minifying and merging them that will result in fast execution of code and app.
Three most common used bundler are:

1. Webpack (create-react-app uses this bundler)
2. Parcel (We will use this into our project)
3. Vite (Currently the most famous Bundler used nowadays)


(6) *How to install any package (Parcel)?*

npm install -D Parcel

There are two types of dependencies:
1. Dev Dependency: used only for development purpose: Example-> npm install -D parcel (we have used here -D to indicate it is dev-dependency)
2. Normal Dependency : for production use: Example-> npm install parcel


(7) *What is difference between ^ and ~ in package.json file:*

^ (caret): It is used for Updation of new versions upto something like if current version is 2.8.3 then we can update that package to 2.x.x means (2.9.9). It will not update to 3.0.0

~ (tilde): It is for minor version update like it will update till 2.8.x means we can update till 2.8.9


8) *npx* -> executing npm package (eg: npx parcel index.html) here npx executing parcel with entry file index.html

9) *Features of Parcel (Or any bundler)*
    - Dev Build (npx parcel index.html (for dev)) (npx parcel build index.html (for production))
    - HMR (Hot module replacement) (Updating output on browser automatically if anything changes in code)
    - Minification
    - Image Optimization
    - Transpilation (using babel)
    - Differential Bundling (make code workable on different version of browsers like (ie and chrome))
    - Caching
    - Tree shaking (removing unused codes)
    - Compression
    - Code Spliting
    - File watcher algorithm (c++)

10) *Why we need parcel or webpack?*
    We need them because it handles all the dependecies, basically it is a manager that manages all the dependencies required to build a react web app,
    like in the above answer, you can see what bundler(parcel) is doing to an app

11) *dist folder:*
    The /dist stands for distributable.
    The /dist folder contains the minimized version of the source code.
    The code present in the /dist folder is actually the code which is used on production web applications.
