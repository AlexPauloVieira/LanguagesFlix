import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://languages-flix.vercel.app/">
        <img src="https://fontmeme.com/permalink/200728/f9f003e3801bb368983d25d628bd550e.png" alt="Logo Languages Flix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;