import React from 'react';
import TabPanel from './tab-panel';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

const text = `
# Pending for review...

This extension is still pending for review by the Chrome Web Store. 
It may take up to a 2 weeks for this extension to be officially published.

As of now you can run this extension in chrome developer mode. See below for instructions.

### Option 1: Run from the build folder

1. [Download](https://github.com/ProfessorX737/tabs-extension/releases/download/v1.0/tabs-collage.zip) the zip file 
2. Unzip the file. This should produce a folder called 'build'
3. Go to chrome://extensions/
4. Turn on developer mode switch at the top right of the page
5. Click 'Load unpacked' button and select the build folder that you extracted
6. Click on 'Tabs Collage' in the extensions drop down at the top right of the chrome tool bar

The extension will open in a new tab. If there are tabs that existed before the extension was installed there will be loading window.

### Option 2: Clone the project and build with yarn
If you want to make your own modifications or option 1 is not working you can use option 2.

1. Install yarn and nodejs
2. Clone the project at https://github.com/ProfessorX737/tabs-extension
3. Type 'yarn install' in the project directory
4. Type 'yarn build' in the project directory. This should create a build folder
5. Go to 'chrome://extensions/' and turn on 'Developer mode' at the top right
6. Click 'Load unpacked' and select the build folder that was created in step 4
7. Click on 'Tabs Collage' in the extensions drop down at the top right of the chrome tool bar


### Troubleshooting:
- If you are restoring your chrome session your tabs may not be loaded so there will be no images shown. You may have to refresh the extension a few times.
- If the extension is not updating try clicking the associated extension icon to activate it.
- If there any sites that start with 'https://' or 'http://' and the image for that site is not found try refreshing the extension.

`

export default function Download(props) {
	return (
		<TabPanel
			currTabIndex={props.currTabIndex}
			tabIndex={props.tabIndex}
		>
			<ReactMarkdown source={text}/>
		</TabPanel>
	)
}

Download.propTypes = {
	currTabIndex: PropTypes.any.isRequired,
	tabIndex: PropTypes.any.isRequired
}

