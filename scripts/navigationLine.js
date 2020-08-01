const navClassName = 'nav';
const navLinkClassName = `${navClassName}--link`;
const navLineClassName = `${navClassName}--line`;
const activeLinkClassName = `${navLinkClassName}_active`;

const navLinks = document.querySelectorAll(`.${navLinkClassName}`);
const getActiveLink = () => document.querySelector(`.${activeLinkClassName}`);

const setLinkActive = link => link.classList.add(activeLinkClassName);
const setLinkInactive = link => link.classList.remove(activeLinkClassName);

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    const currentlyActiveLink = getActiveLink();
    setLinkInactive(currentlyActiveLink);

    setLinkActive(navLink);
  });
});
