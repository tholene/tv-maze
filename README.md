# TV Maze front

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## First off

You need to run `yarn install` before any of the below scripts will work.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner with coverage reporting.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Notes

### Structure

The application is structured as follows:

- src
  - app
    - components
    - hooks
    - interfaces
    - views
  - config

#### Components

Here are the basic building blocks along with some more complex shared components.

### Hooks

This is where... well - the hooks are. Currently only one hook exists.

### Interfaces

And this is where I put shared interfaces.

### Views

Each view integrates the components to create value. There are currently only two views, `ShowsView` and `ShowView`.

### Config

A configuration file that right now only contains very little information. Can be accessed in runtime.

## Future work

If I would've had more time to work on this, there are a few things that could've been added/improved:

- More sophisticated error handling and notification system
  - The current way of showing a notification e.g. slow connection notification should be handled by an app-wide context that can be used to show not only informative messages, but also errors (with separate styling for example).
  - The current notifications for a slow connection are limited to three and their texts are hardcoded. This could be changed to handle an array of messages, for example.
- E2E integration tests
  - Currently there is nothing that tests a scenario where you enter an empty page, search for a show, click it and then verifies that the information on the new page is correct.
- More extensive theming
  - Perhaps with multiple themes? I kind of bit off more than I could chew here initially, but regressed and just made it as simple as possible.
  - Components should define their own internal theme and extend the app theme.
- A more robust app layout
  - What I have right now works, but only for the current use cases.
- Every string is hardcoded right now. This could be fetched from a CMS instead.
- Endless Scroll or Pagination
  - Fetch additional results in `ShowsView` with offset and limit query parameters.
- Sorting the results
- Accessibility improvements for e.g. screen readers.
- Separate page titles for different pages.
- Possibly Debounce onChange in `ShowSearch`. I just looked at Google and decided to execute the search on ENTER.
