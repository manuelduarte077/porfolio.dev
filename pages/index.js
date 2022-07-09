import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbNinjaNvim from '../public/images/works/ninja_nvim.png'
import flutterPackages from '../public/images/works/flutter-2.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Software Engineer based in Nicaraguan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Manuel Duarte
          </Heading>
          <p>Software Engineer ( Dart (Flutter) )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            borderRadius="full"
            src="/images/img.png"
            alt="Profile image"
            width={90}
            height={90}
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a mobile software engineer from Nicaragua. I create mobile applications using Flutter.
          I started the mobile app development journey with Kotlin and Flutter 2 years ago and have been getting familiar with these environments surrounding these amazing tools. In this time it has led me to understand the principles of software development.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Netsoftnic! Nicaraguan
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>I work at Nerdify and Works
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Coding, Playing Fifa, Music, IA</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/manuelduarte077" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @manuelduarte077
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com/manuelduarte077" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @manuelduarte077
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/manuelduarte077/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @manuelduarte077
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://github.com/manuelduarte077/ninja.nvim"
            title="NinjaNvim"
            thumbnail={thumbNinjaNvim}
          >
            My nvim Settings for Windows
          </GridItem>

          <GridItem
            href="https://github.com/manuelduarte077/loading_progress_indicator"
            title="Loading Progress Indicator"
            thumbnail={flutterPackages}
          >
           💙 👾 💫 a flutter widget to indicate loading progress. Easy to use, easy to extend
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
