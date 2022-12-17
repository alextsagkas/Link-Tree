# IAPS Link Tree with ReactJS

## Outline

The Link Tree page contains:

- **Logo Component**, where the logo image and the brand name are located
- **Link List Component**, where all the important links are aggregated
- **Social Media List Component**, where the brands social media are presented

## ReactJS

The page is built using simple React concepts. In more detail:

- React **components** are used so as to separate concerns and make code more neat
- React `useState` hook is used to store the state of the errorMessage, that occurs if the sharing functionality fails. The errorMessageHandler function is used to change the errorMessage value
- React `useEffect` is exploited to re-render the components that depend on the change of the errorMessage. A modal is displayed momentarily to inform user about the failure with a explanatory message
- React `Context` Hook is used so as to share `errorMessage` state and its handler function to all nested components inside App component

## Styling

For the styling **TailwindCSS** is used.

- Custom styles and animations are stored in `tailwind.config.cjs` file
- All the styles are applied directly in `.jsx` component files, which is pretty convenient

For the social media icons **Font Awesome** is used.

## Bundler

The bundler that was preferred for this app was Vite. I strongly recommend you to try it!

## Contact

If you find any bugs or search for an explanation do not hesitate to contact me. My contact information can be found on my GitHub profile.
