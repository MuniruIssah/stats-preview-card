# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Awesome Sections](#awesome-sections)
    - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot
#### Desktop
![](./screenshot.png)
#### Mobile
![](./screenshot-mobile.png)

### Links

- Solution URL: [Solution URL](https://github.com/MuniruIssah/stats-preview-card)
- Live Site URL: [Live URL](https://stats-preview-card-git-main-muniruissah.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Gatsby.js](https://www.gatsbyjs.com/) - React framework
- [Tailwind](https://tailwindcss.com/) - For styles


### What I learned
- How to blend a background image with a background color.
### Awesome sections
Here are some snippets of the code that I think are awwwwesome:


```jsx
<div className={'stats-group'}>
    {
         statistics.map((item,index)=><Stat key={item.title} {...item} />)
    }
</div>
```
```css
.image-bg{
  @apply w-full h-full  bg-cover bg-no-repeat bg-[#AA5CDB] bg-blend-multiply flex-1 w-full h-full min-h-[26vh];
}
```



### Useful resources

- [Background Blend Mode](https://tailwindcss.com/docs/background-blend-mode) - I learnt the various types of background blend modes that Tailwind CSS has.


## Author

- Website - [Issah Muniru](https://muniruissah.github.io/muniru-issahs-portfolio/)
- Frontend Mentor - [@MuniruIssah](https://www.frontendmentor.io/profile/MuniruIssah)
- Twitter - [@ningen_dewa_nai](https://www.twitter.com/ningen_dewa_nai)
