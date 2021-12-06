import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="SunnyDesk">
    <Container>
      <Title>
        SunnyDesk <Badge>2021</Badge>
      </Title>
      <P>SunnyDesk</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile, Android, Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, Jetpack Compose</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/manuelduarte077/SunnyDesk">
            SunnyDesk <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="https://raw.githubusercontent.com/manuelduarte077/SunnyDesk/main/doc/2.png"
        alt="Sunny Desk"
      />
      <WorkImage
        src="https://raw.githubusercontent.com/manuelduarte077/SunnyDesk/main/doc/3.png"
        alt="Sunny Desk"
      />
    </Container>
  </Layout>
)

export default Work
