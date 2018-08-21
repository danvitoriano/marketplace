# React Marketplace

**List itens on sale. Buy an item through third-party payment API**

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Install

```
git clone git@github.com:danvitoriano/marketplace.git
cd marketplace
yarn install
```

## Run

```
yarn start
```

Starts the development server at [http://localhost:3000](http://localhost:3000).

## Build

```
yarn build
```

Create a production ready `/build` folder. You may serve it with a static server:

```
serve -s build
```

## Test

### Unit Testing

It uses Jest and Enzyme. To run 31 unit tests:

```
yarn test
```

## Deploy

### Heroku

Use [Heroku Buildpack](https://github.com/mars/create-react-app-buildpack).

✏️ _Replace `$APP_NAME` with a name for your unique app._

```bash
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master
heroku open
```

## Contact

<vitoriano08@gmail.com>