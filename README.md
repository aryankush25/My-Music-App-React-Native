# My-Music-App-React-Native

> #### **_Note: Please do not use `npm` to manage dependencies. Use :heart:`yarn`:heart: instead. We use `yarn` because of better performance._**

## Initial Setup

```bash
brew install node

brew install yarn

brew install watchman

sudo gem install cocoapods

git clone https://github.com/aryankush25/My-Music-App-React-Native.git # Clone the project

```

## React Native @ frontend/ Installation steps

```bash
cd My-Music-App-React-Native/frontend # go to frontend directory

yarn # Install dependencies

cd ios && pod install && cd .. # Goto ios directory, install pods and go back to main project directory

yarn start # To run the metro bundler

npx react-native run-ios # Start app in ios

# android coming soon
```

You can also refer the official [React Native docs](https://facebook.github.io/react-native/docs/getting-started) for installation and setup.

## Backend Node Server @ backend/ Installation steps

```bash
cd My-Music-App-React-Native/backend/ # go to backend directory

yarn # install dependencies

yarn start # starts the backend node server through `nodemon`

# Mongo DB coming soon
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
