const navClassName = 'nav';
const navLinkClassName = `${navClassName}--link`;
const navLineClassName = `${navClassName}--line`;
const activeLinkClassName = `${navLinkClassName}_active`;

const navLine = document.querySelector(`.${navLineClassName}`);
const navLinks = document.querySelectorAll(`.${navLinkClassName}`);
const getActiveLink = () => document.querySelector(`.${activeLinkClassName}`);

const setLinkActive = link => link.classList.add(activeLinkClassName);
const setLinkInactive = link => link.classList.remove(activeLinkClassName);

const getItemDimentions = item => item && item.getBoundingClientRect();

navLinks.forEach(navLink => {
  navLink.addEventListener('click', event => {
    const currentlyActiveLink = getActiveLink();
    setLinkInactive(currentlyActiveLink);

    setLinkActive(navLink);
    const linkOffset = navLink.offsetLeft;
    const linkWidth = navLink.scrollWidth;

    relocateLine(linkOffset, linkWidth);
  });
});

const relocateLine = (leftOffset, width) => {
  navLine.style.transform = `translateX(${leftOffset}px)`;
  navLine.style.width = `${width}px`;
};
