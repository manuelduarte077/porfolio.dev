import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbWeather from '../public/images/works/weather_app.png'
import thumbAwesomeLatam from '../public/images/works/awesome_latam.png'

import sunnyDesk from '../public/images/works/sunny_desk.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section> */}

        <Section delay={0.4}>
          <WorkGridItem
            id="awesome_latam"
            thumbnail={thumbAwesomeLatam}
            title="Gophers LATAM"
          >
            Comunidad de programadores Golang en Español-Latino.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* This is the section for old projects but as I have it will be commented */}
      <Section delay={0.5}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section delay={0.6}>
          <WorkGridItem
            id="sunny_desk" thumbnail={sunnyDesk} title="SunnyDesk">
           Compose for Desktop: Get Your Weather!.
          </WorkGridItem>
        </Section>

      <Section delay={0.7}>
          <WorkGridItem
            id="news_app" thumbnail={thumbWeather} title="Kotlin NewsApp MVVM">
           🤖 Aplicación de Noticias, usando la arquitectura MVVM, con Kotlin.
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem
            id="movie_app" thumbnail={thumbWeather} title="Kotlin MovieApp">
           Kotlin MovieApp.
          </WorkGridItem>
        </Section>
        
        <Section delay={0.9}>
          <WorkGridItem
            id="weather_app" thumbnail={thumbWeather} title="Weather App UI">
            Flutter weather app UI 🚀.
          </WorkGridItem>
        </Section>

        <Section delay={0.10}>
          <WorkGridItem id="webcoffe" thumbnail={thumbStyly} title="Web Coffe">
            Flutter web app for coffee shop ☕.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
