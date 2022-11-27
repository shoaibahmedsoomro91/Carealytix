# Coding assignment for a simplified dialysis logbook

Hello there!
For this assignment, you are supposed to create a simple dialysis logbook with which users can keep track of their weight and blood values.
In this repository, you'll find a template project where we already prepared a setup with the required dependencies.
It's a React Native project using expo, typescript, native-base, and react-redux. To get started, all you have to do is create a fork of the project and start hacking! 
The following sections provides an overview of the functionalites and the requirements for the app that you should implement.

## App description
### Data
Users should be able to track specific blood values, their weight, wellbeing, and itch intensity. You can find an overview of the configuration from ([this sample API](https://6374c09048dfab73a4e7b7c4.mockapi.io/logbook-configuration/1)). In the app, you should fetch the configuration from this sample API: Possible types are `NUMERIC` and `INTEGER`, and they should support a `minValue` and `maxValue`. `MetadataFields` can either be `NOTES` (Text field), or `BEFORE_OR_AFTER_DIALYSIS` (Selector allowing you to choose between "Before Dialysis", "After Dialysis", and "Arbitrary").

### App flow
The users should be able to track a new value for each field individually. For that, create a screen displaying all values where you can add a new entry by clicking on the respective value. Also add a screen for each value where you can specify the data for the new entry.
The entered data should be stored in the `redux-store` (redux-toolkit). You'll find a pre-configured redux store in the template.
Lastly, the users should be able to see a list of all stored entries for each value when clicking on it. Create a screen that loads and displays the existing entries stored in the redux state.

## Technical requirements
As the template already suggests, the app should be written in `TypeScript`. Furthermore, we want you to use `native-base` components and theming for the frontend. And lastly, data management should be done using `react-redux` - which is already pre-configured in the template.

## Project init
- Create a fork of this repository and clone it
- You can start the app with `yarn start`
- You can either use the iOS Simulator to preview your app or download the Expo Go app for your smartphone and scan the QR-code displayed in your terminal after starting the app
- You are ready to go! Changes are directly visible in Expo Go as fast reload is enabled
