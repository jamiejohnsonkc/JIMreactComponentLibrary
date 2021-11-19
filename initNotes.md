1. git init
2. git ignore

3. Upgrade/Update to Yarn 2: 
   1. Run npm install -g yarn to update the global yarn version to latest v1
   2. Go into your project directory
   3. Run yarn set version berry to enable v2 (cf Install for more details)
   4. If you used .npmrc or .yarnrc, you'll need to turn them into the new format (see also 1, 2) https://yarnpkg.com/configuration/yarnrc
   5. Add nodeLinker: node-modules in your .yarnrc.yml file https://yarnpkg.com/configuration/yarnrc#nodeLinker
   6. Commit the changes so far (yarn-X.Y.Z.js, .yarnrc.yml, ...)
   7. Run yarn install to migrate the lockfile
   8. Take a look at this article to see what should be gitignored https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored
   9. Commit everything remaining


4.  yarn create-react-app reactCompLib