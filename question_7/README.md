SETUP
====
- npm install / yarn install

RUNNING
====
- npm start / yarn start
  - This commands starts server and webpack to compile js files
- open http://localhost:3000

BUILDING
====
- npm run build / yarn run build
  - This commands creates a build folder with html file and app.js minimized

TESTING
====
- npm test / yarn test (Runs all tests)


FILES STRUCTURE (in folder src)
====
- components/ : Components of the project. They have the following structure :
  - NameOfTheComponent/
    - index.js : component jsx
- containers/ : Contains every 'big components'/pages of the project. They have the following structure :
  - NameOfTheContainer/
    - index.js : container jsx
    - modules : contains container's redux ecosystem
      - index.js : contains reducer, constants (namespaced to this container), actions
      - index.test.js : unit test for the module
- utils/ : Contains transverse files
- index.js : Entry point of the app (contains React.DOM)
- reducers.js : Combines all reducers
- store.js : Sets store of the project
