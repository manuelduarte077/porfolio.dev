import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Animated Todo">
    <Container>
      <Title>
        Animated Todo <Badge>2020</Badge>
      </Title>
      <P>✨ React Native Animated Todo 🚀</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile, Android, IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Expo, NativeBase, Moti</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/manuelduarte077/react-native-animated-todo">
            Animated Todo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="https://raw.githubusercontent.com/manuelduarte077/react-native-animated-todo/main/doc/home-light.png"
          alt="weather"
        />
        <WorkImage
          src="https://raw.githubusercontent.com/manuelduarte077/react-native-animated-todo/main/doc/home.png"
          alt="weather_01"
        />
      </SimpleGrid>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="https://raw.githubusercontent.com/manuelduarte077/react-native-animated-todo/main/doc/sidebar-light.png"
          alt="weather_01"
        />
        <WorkImage
          src="https://raw.githubusercontent.com/manuelduarte077/react-native-animated-todo/main/doc/sidebar.png"
          alt="weather_01"
        />
      </SimpleGrid>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="https://raw.githubusercontent.com/manuelduarte077/react-native-animated-todo/main/doc/about-light.png"
          alt="weather_01"
        />
        <WorkImage
          src="https://raw.githubusercontent.com/manuelduarte077/react-native-animated-todo/main/doc/about.png"
          alt="weather_01"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
