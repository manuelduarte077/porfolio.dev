import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Awesome Latam">
    <Container>
      <Title>
        👓 Awesome Latam 🌎 <Badge>2021</Badge>
      </Title>
      <P>
        Colección de contenidos y recursos en Español para desarrolladores de
        Golang.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/gophers-latam/awesome-latam">
            https://github.com/gophers-latam/awesome-latam{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Backend, Frontend, APIS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Golang, Recursos, Tutoriales, Cursos</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://gophers-latam.github.io/">
            Comunidad de programadores Golang en Español-Latino.
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/awesome_latam_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/awesome_latam_02.png" alt="Inkdrop" />
      <WorkImage src="/images/works/awesome_latam_03.png" alt="Inkdrop" />
      <WorkImage src="/images/works/awesome_latam_04.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
