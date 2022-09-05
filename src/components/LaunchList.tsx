import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';

import * as API from '../services/launches';
import { Launches } from '../types';

export function LaunchList() {
  const [launches, setLaunches] = useState<Launches[]>();

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        SpaceX launches
      </Heading>
      {launches?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches?.map(launch => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
