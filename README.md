# React Marketplace

[Live Demo](https://marketplace-react.herokuapp.com/)

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

## StoryBook UI components library

To list components styleguide at [http://localhost/9009](http://localhost/9009), run:

```
yarn storybook
```

## Continuos Integration

Automated build continuous process with [CircleCI](http://circleci.com)

## Test

### Unit Testing

It uses Jest. To watch unit testing, run:

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

Live Demo:

[https://marketplace-react.herokuapp.com/](https://marketplace-react.herokuapp.com/)

## API

To fetch products. Made with Node.js and Express.

[https://marketplace-api-server.herokuapp.com/](https://marketplace-api-server.herokuapp.com/)

Endpoints:

`/api/products` - GET

`/api/products/:product_id` - GET

Repository:

[https://git.heroku.com/marketplace-api-server.git](https://git.heroku.com/marketplace-api-server.git)

## Contact

<vitoriano08@gmail.com>
