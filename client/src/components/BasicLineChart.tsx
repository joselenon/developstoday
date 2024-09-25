import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useCountries } from '@/contexts/CountriesContext';
import { useParams } from 'react-router-dom';
import useGetCountryPopulation from '@/hooks/useGetCountryPopulation';
import styled from 'styled-components';

const ChartContainer = styled.div`
  overflow-x: scroll;
  width: 100%;

  .css-10vg0a6-MuiResponsiveChart-container {
    max-width: 600px;
    width: 100%;
    height: 100%;
  }
`;

export default function BasicLineChart() {
  const { countryCode } = useParams();
  const { getPopulation } = useGetCountryPopulation();

  const [populationData, setPopulationData] = useState<ICountryPopulation | undefined>(undefined);

  const { countriesData } = useCountries();
  const country = countriesData?.countriesAvailable.find((country) => country.countryCode === countryCode);

  useEffect(() => {
    const fetchPopulation = async () => {
      if (!countryCode || !country || !country.iso3) return;

      const countryDetails = await getPopulation(country.iso3);
      setPopulationData(countryDetails);
    };

    fetchPopulation();
  }, [countryCode]);

  const x = populationData?.populationCounts.map((data) => data.year) || [0];
  const y = populationData?.populationCounts.map((data) => data.value) || [0];

  return (
    <ChartContainer>
      <LineChart xAxis={[{ data: x }]} series={[{ data: y }]} width={500} height={300} />
    </ChartContainer>
  );
}
