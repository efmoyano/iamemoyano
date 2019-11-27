import React from 'react';

const getNetworks = networks => {
  return networks.social.map(function(network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });
};

export { getNetworks };
