/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

function displayHomeBurger() {
  // FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
  document.getElementById('Footer').style.justifyContent = 'flex-start';
  document.getElementById('Footer').style.position = 'fixed';
  document.getElementById('Footer').style.display = 'block';

}
function displayProjectBurger() {
  // FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
  document.getElementById('Footer').style.justifyContent = 'flex-start';
  document.getElementById('Footer').style.position = 'fixed';
  document.getElementById('Footer').style.display = 'block';

}
function displayAboutBurger() {
  // FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
  document.getElementById('Footer').style.justifyContent = 'flex-start';
  document.getElementById('Footer').style.position = 'fixed';
  document.getElementById('Footer').style.display = 'block';

}
function displayContactBurger() {
  // NAVBAR-CONTACT STYLE

  // CONTACT-BACKGROUND STYLE

  // CONTACT-FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'none';
  // FOOTER STYLE
  document.getElementById('Footer').style.display = 'block';

}
function displayCurriculumBurger() {
  // FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
  document.getElementById('Footer').style.justifyContent = 'flex-start';
  document.getElementById('Footer').style.position = 'fixed';
  document.getElementById('Footer').style.display = 'block';

}

function displaySkillsBurger() {
  // FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
  document.getElementById('Footer').style.justifyContent = 'flex-start';
  document.getElementById('Footer').style.position = 'fixed';
  document.getElementById('Footer').style.display = 'block';
}

const BurgerMenu = () => {
  return (
    <div className='BurgerMenu'>
      <ul className='navbarBurgerMenu'>
        <li>
          <Link
            onClick={displayHomeBurger}
            id='navHome'
            className='navLinkBurgerMenu'
            to='/'
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            onClick={displayProjectBurger}
            id='navProjects'
            className='navLinkBurgerMenu'
            to='/projects'
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            onClick={displayAboutBurger}
            id='navAbout'
            className='navLinkBurgerMenu'
            to='/about'
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            onClick={displayContactBurger}
            id='navContact'
            className='navLinkBurgerMenu'
            to='/contact'
          >
            CONTACT
          </Link>
        </li>
        <li>
          <Link
            onClick={displaySkillsBurger}
            id='navSkills'
            className='navLinkBurgerMenu'
            to='/skills'
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            onClick={displayCurriculumBurger}
            id='navCurriculum'
            className='navLinkBurgerMenu'
            to='/curriculum'
          >
            CURRICULUM
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
