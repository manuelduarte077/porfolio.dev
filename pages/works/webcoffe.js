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
          <Link href="https://github.com/manuelduarte077/flutter-weather-app">
            Web Coffe <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        </List>
  
        <WorkImage src="/images/works/modetokyo_eyecatch.png" alt="mode.tokyo" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/modetokyo_01.png" alt="mode.tokyo" />
          <WorkImage src="/images/works/modetokyo_02.png" alt="mode.tokyo" />
        </SimpleGrid>
        <WorkImage src="/images/works/modetokyo_03.jpg" alt="mode.tokyo" />
      </Container>
    </Layout>
  )
  
  export default Work
  