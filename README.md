This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



### 项目添加sass
1，npm install sass-loader node-sass --save-dev 
2，展示config文件夹 npm run eject  （前提是先提交项目到git仓库）
3，在 webpack.config.js 中添加 
,
            {
              test: /\.scss$/,
              loaders: ['style-loader','css-loader','sass-loader'],
            }
4，重启项目

### 全局配置sass变量
1，安装 npm i sass-resources-loader -D
2，在 webpack.config.js 中添加
.concat({
                loader: "sass-resources-loader",
                 options: {
                     resources: [path.resolve(__dirname, "./../src/styles/main.scss")] // scss公共变量所在文件的路径
                   }
              })

3，配置跨域  npm i http-proxy-middleware
    在 src 目录下新建 setupProxy.js 

4，安装axios   npm i axios -S

5，安装 npm i -g dotenv-cli
    package.json 里配置
"build:dev": "dotenv -e .env.development react-app-rewired build",
    "build:pro": "dotenv -e .env.production react-app-rewired build",
    "build:test": "dotenv -e .env.test react-app-rewired build"