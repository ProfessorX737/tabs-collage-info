import React from 'react';
import TabPanel from './tab-panel';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

const text = `
# Tabs Collage - a Google Chrome extension
Easily navigate, manage and search your chrome tabs through a live 
updated collage view of site screenshots for all your tabs.

If you are like me you most likely have up to 100 or more tabs open simultaneously in chrome 
especially if you are doing research or am a programmer learning how to code.
These tabs may be in different windows so managing and finding your tabs is always a nightmare. 
Tabs Collage solves this problem in a very neat way.

## Collage mode

Collage mode is the default mode which is indicated by the highlighed tiles icon.

Click on any image to open that chrome tab. This will work even if the tab is on minimized window.

![Collage_mode_image](https://i.imgur.com/7GUKwgK.png)

You can reorder the tabs and the collage will reorder its images correspondingly.

## Organize your domains

Tabs Collage allows you to group your domains together into sub views like shown below:

![sub_views_image](https://i.imgur.com/TSJQcUO.png)

You can create an unlimited number of sub views by clicking the split vertical and split horizontal
buttons. After creating the sub view you can drag tabs into it

![](https://i.imgur.com/oTPmtAl.png)

The 'all' tab is the grouped view of all the tabs in the sub view.

## Close all tabs under a domain
Click the '(x)' button on a tab to close the tab as well as its results.
![Close_domain_image](https://i.imgur.com/mCMLARq.png)

Alternatively you can close individual sites by clicking the 'x' button on on an image:

![close_site_image](https://i.imgur.com/OSNCwM7.png)

## Easily search for tabs

Tabs Collage makes it easy to search for tabs by clicking the search icon.

![tabs_collage_search](https://i.imgur.com/elErqiH.png)

Alternatively to make a search more permanent you can create a search tab. 
Click on on the '+' icon and you will get a tab like this:
![search_tab_image](https://i.imgur.com/kNUmx6B.png)

Press enter to save your search as a tab. A search tab has two close buttons and does not have an icon.
Click the 'x' button to close the search tab without closing its results.

## List mode

If collage view is not enough you also have list mode by clicking the list icon on a view

Hover over the site titles or scroll and the background image will correspond to the focused site.
Once a site is in focus click anywhere or press 'Enter' and that site will open.

![list_mode_image](https://i.imgur.com/rODnqtw.png)

Press the 'd' key on your keyboard to close the focused site or
alternatively you can just click the 'x' icon to close a site.

## Demo
See this youtube [video](https://youtu.be/UeOxUNdrzQA) for a run down of the features.

`

export default function About(props) {
	return (
		<TabPanel
			currTabIndex={props.currTabIndex}
			tabIndex={props.tabIndex}
		>
			<ReactMarkdown
				source={text}
			/>
		</TabPanel>
	)
}

About.propTypes = {
	currTabIndex: PropTypes.any.isRequired,
	tabIndex: PropTypes.any.isRequired
}

