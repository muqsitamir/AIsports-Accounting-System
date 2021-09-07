# GUIDE: BINDING REACT FRONTEND WITH DJANGO 

### Prerequisites:
To follow this guide you should have the following:
1) Have python and node installed on your system.
2) Activate a virtual environment for python to work with.
3) Have atleast one app in a django project.

> Note: If you have any of the above requirement unsatisfied you can refer to the appropriate guide below.

## Backend Setup
### webpack-loader
Change directory to django projects root and activating the virtual environment.
```shell script
cd amerislam
activate venv/bin/activate
```
now, install `django-webpack-loader` and add it to the `requirements.txt`
```shell script
pip install django-webpack-loader==1.0.0
echo django-webpack-loader==1.0.0 >> requirements.txt
```
### settings.py
Add following lines in `amerislam/settings.py`
```
INSTALLED_APPS = [
  ...
  'rest_framework',
  'webpack_loader',
  ...
]

STATIC_URL = '/static/'

STATIC_ROOT = BASE_DIR / 'staticfiles'

STATICFILES_DIRS = (
    BASE_DIR / 'static',
    BASE_DIR / 'frontend/assets',
)

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'js/',
        'STATS_FILE': BASE_DIR / 'webpack-stats.json',
    }
}
```

### Template
Now, create a file called `index.html` in `templates/frontend`:
```shell script
mkdir -p templates/frontend
touch templates/frontend/index.html
```
and add the following code in the file:
```djangotemplate
{% load render_bundle from webpack_loader %}
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<div id="main">
    <div id="react-app"></div>
</div>

<script src="{% render_bundle "main.js" %}"></script>
</body>
</html>
```

## Frontend Setup 
### Package.json
```shell script
mkdir frontend
cd frontend
npm init
```
After running this command package.json will appear and a directory for node modules will be created.

### Babel
Now, go ahead and run:
```shell script
npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0 babel-plugin-transform-class-properties
```
- `babel-core` is the main babel package — We need this for babel to do any transformations on our code. 
- `babel-cli` allows you to compile files from the command line. 
- `preset-react` and `preset-env` are both presets that transform specific flavors of code — in this case, 
the env preset allows us to transform ES6+ into more traditional javascript and the react preset does the same,
but with JSX instead.

In the project root, create a file called `.babelrc`.
```shell script
touch .babelrc
``` 
and add following code in it:
```
{
  "presets": ["@babel/env", "@babel/preset-react"],
  "plugins": ["transform-class-properties"] 
}
```
Here, we’re telling babel that we’re going to use the env and react presets.

### Webpack
Now, we will configure webpack:
```shell script
npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 webpack-bundle-tracker style-loader@0.23.0 css-loader@1.0.0 clean-webpack-plugin babel-loader@8.0.2
```
In the project root, create a file called `webpack.config.js`.
```shell script
touch webpack.config.js
```
and add following code in it:
```js
const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.join(__dirname, 'frontend/assets/js/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
        minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new CleanWebpackPlugin(),
    new BundleTracker({
        path: __dirname,
        filename: 'webpack-stats.json'
    }),
  ],
};
```

### React
Finally, install react:
```shell script
npm install --save react react-dom
```
add following code in `package.json`:
```
...
    "scripts": {
        ...
        "start": "./node_modules/.bin/webpack --config webpack.config.js --watch",
        "build": "./node_modules/.bin/webpack --mode production",
        "watch": "npm run start --watch"
    },
...
```
create a file called `index.js` in your `frontend/src` directory:
```shell script
mkdir -p src && touch src/index.js
```
and add the following code in it:
```jsx harmony
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render () {
    return (
      <h1>Django + React + Webpack + Babel = Awesome App</h1>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('react-app'));
```

## References
- [Creating a React App From Scratch.](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Using Webpack transparently with Django](https://owais.lone.pw/blog/webpack-plus-reactjs-and-django/)
- [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader#readme)
