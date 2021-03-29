import React from 'react';

export const NavLink = () =>(
    <nav class="light-blue lighten-2">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Medbloc</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">Features </a></li>
        <li><a href="/data"> Data </a></li>
        <li><a href="/">  Application </a></li>
        <li><a href="/"> Contact us </a></li>
      </ul>
    </div>
  </nav>
)