import React from 'react';

import unknownFlag from '@/assets/unknownFlag.png';

export default function CountryFlag({ country }: { country?: ICountryWithFlag }) {
  return (
    <div>
      {country && country.countryFlag ? (
        <img src={country.countryFlag} width={50} height={30} />
      ) : (
        <img src={unknownFlag} width={50} height={30} />
      )}
    </div>
  );
}
