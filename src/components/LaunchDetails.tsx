import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Flex, Text, Spacer, Tag } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import * as API from '../services/launches';
import { Launches } from '../types';

export function LaunchDetails() {
  const [launch, setLaunch] = useState<Launches>();
  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(Number(launchId))
      .then(setLaunch)
      .catch(console.log);
  }, [launchId]);
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {!launch ? (
        <div>Loading...</div>
      ) : (
        <>
          <Flex display="flex">
            <Text fontSize="2xl">
              Mission <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
              {launch.launch_success ? 'Success' : 'Failure'}
            </Tag>
          </Flex>
          <Box>
            Rocket:{' '}
            <Link to={`rockets/${launch.rocket?.rocket_id}`}>
              {launch.rocket?.rocket_name}
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}
