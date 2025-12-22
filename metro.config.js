const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
// app\global.css
 
module.exports = withNativeWind(config, { input: './app/global.css' })

// npx expo customize metro.config.js    using this commond we genrate this file