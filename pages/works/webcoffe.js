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
    <Layout title="Web Coffe">
      <Container>
        <Title>
        Web Coffe <Badge>2020</Badge>
        </Title>
        <P>My website from scratch with Flutter</P>  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web, Mobile, Android, IOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Dart, Flutter</span>
          </ListItem>
          <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/manuelduarte077/flutter_web_coffee">
            Web Coffe <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        </List>
  
        <WorkImage src="https://raw.githubusercontent.com/manuelduarte077/flutter_web_coffee/main/docs/Screenshot_101.png" alt="mode.tokyo" />
        <SimpleGrid columns={3} gap={3}>
          <WorkImage src="https://raw.githubusercontent.com/manuelduarte077/flutter_web_coffee/main/docs/Screenshot_102.png" alt="mode.tokyo" />
          <WorkImage src="https://raw.githubusercontent.com/manuelduarte077/flutter_web_coffee/main/docs/Screenshot_103.png" alt="mode.tokyo" />
        <WorkImage src="https://raw.githubusercontent.com/manuelduarte077/flutter_web_coffee/main/docs/Screenshot_104.png" alt="mode.tokyo" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  