import React from "react";

const HeroSocial = ({ href, src, alt, title }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img class="h-20 w-20 flex justify-between " src={src} alt={alt} title={title} />
    </a>
  );
};

export default HeroSocial;

