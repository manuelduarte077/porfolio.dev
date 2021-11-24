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
  <Layout title="Weather App">
    <Container>
      <Title>
        Weather App <Badge>2020</Badge>
      </Title>
      <P>✨ Flutter weather app UI 🚀</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile, Android, IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Dart, Flutter</span>
        </ListItem>
        <ListItem>
          <Meta>Project</Meta>
          <Link href="https://github.com/manuelduarte077/flutter-weather-app">
            Weather App <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/weather_01.png" alt="weather" />
        <WorkImage src="/images/works/weather_02.png" alt="weather_01" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/weather_03.png" alt="weather_01" />
        <WorkImage src="/images/works/weather_04.png" alt="weather_01" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
