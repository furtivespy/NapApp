# NapApp
A Swarm-like app to check-in naps around town and find good nap locations

## Why

This app is built so I can teach myself a few things. 
* React
* Redux
* Webpack
* Firebase
* Material UI

## Beta

[Nap App Test Site](https://nameless-garden-86566.herokuapp.com/)

## Screenshot

![Screenshot](http://furtivespy.com/img/napappscreenshot.png "Screenshot")

## Installation/Usage

From scripts:
build: "webpack --config ./webpack.prod.config.js --progress --colors",
start: "node ./src/app.js"

## Contributing

(This is mainly a personal learning project...)

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* Weekend 1: Got most of the basic stuff out of the way. many of the main components are built. Start to wire up actions and the firebase.auth.
* Weekend 2: Decided to use Redux. So a bit of refactoring of componets and creations of some containers. Made some basic reducers. Started the process to have a "production" build to push to Heroku.
* Weekend 3: Switched all the existing Firebase calls to use the Redux store. Added multiple login services. Added a help and error dialog. Added logout.

## Credits

Thanks to Melissa for the idea and to [hendrikswan/react-stack](https://github.com/hendrikswan/react-stack) for a baseline of react. And to [Dan Abramov](https://github.com/gaearon) for his Redux course on egghead.io and his other articles on the flow of Redux.

## License

If any of this is useful for you, use it.