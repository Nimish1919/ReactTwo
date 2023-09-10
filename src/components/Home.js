import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const HeadingCss = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: ['l', '3xl'],
};
const Home = () => {
  return (
    <>
      <Box>
        <MyCaraousel />
      </Box>

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          width={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          alignItems={'center'}
          direction={['column', 'row']}
          padding={'4'}
        >
          <Image src={img5} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'170%'}
            padding={'4'}
            textAlign={'center'}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At enim
            ducimus sunt doloribus, ex nostrum repellat temporibus esse
            molestias dignissimos mollitia a veritatis quas, itaque in expedita
            quam sed, earum consequatur suscipit perspiciatis. Quibusdam
            aspernatur et porro vitae autem fugiat sapiente voluptatum voluptas!
            Eveniet nesciunt eligendi quae nostrum, sint, necessitatibus
            consequatur dolor esse, impedit tenetur voluptatibus labore porro
            numquam dolorem quia quasi iusto doloribus quidem facilis.
            Recusandae odio cumque quo aut eligendi, quaerat labore vitae?
            Blanditiis adipisci tempore dolorum dolorem ducimus maxime error
            placeat accusantium ipsum dolor, similique veniam porro nesciunt?
            Accusantium cumque deleniti harum corrupti ad incidunt sint
            accusamus?
          </Text>
        </Stack>
      </Container>
    </>
  );
};

const MyCaraousel = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box width={'100%'} height={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingCss}>
          Watch the future
        </Heading>
      </Box>
      <Box width={'100%'} height={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingCss}>
          Future is Gaming
        </Heading>
      </Box>
      <Box width={'100%'} height={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingCss}>
          Gaming on Console
        </Heading>
      </Box>
      <Box width={'100%'} height={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingCss}>
          Night Mode Gaming
        </Heading>
      </Box>
      <Box width={'100%'} height={'100vh'}>
        <Image src={img5} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingCss}>
          Yes! This is you
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
