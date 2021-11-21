import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/posts/golang.jpg'
import thumb003Docker from '../public/images/posts/docker.jpg'
import thumbFirebase from '../public/images/posts/firebase.jpg'
import thumbHowTwoPython from '../public/images/posts/python-2.jpg'
import thumb50xPython from '../public/images/posts/python.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Tuplas en Python (tuple)"
            thumbnail={thumbHowTwoPython}
            href="https://manuelduarte077.medium.com/tupla-tuple-9e303b6e6c60"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Learn Go in 8 minutes"
            thumbnail={thumbFishWorkflow}
            href="https://dev.to/manuelduarte077/learn-go-in-8-minutes-59ph"
          />
          <GridItem
            title="¿Como hacer un Deploy a Firebase Hosting?"
            thumbnail={thumbFirebase}
            href="https://dev.to/manuelduarte077/como-hacer-un-deploy-a-firebase-hosting-1d1j"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Instalación de Docker en Ubuntu"
            thumbnail={thumb003Docker}
            href="https://dev.to/manuelduarte077/instalacion-de-docker-en-ubuntu-4mhf"
          />
          <GridItem
            title="Diccionarios en Python"
            thumbnail={thumb50xPython}
            href="https://dev.to/manuelduarte077/diccionarios-en-python-4h3n"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
