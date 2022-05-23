import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbStyly from '../public/images/works/web_coffe.png'
import thumbWeather from '../public/images/works/weather_app.png'
import thumbAwesomeLatam from '../public/images/works/awesome_latam.png'
import sunnyDesk from '../public/images/works/sunny_desk.png'

import notepad from '../public/images/works/notepad.png'
import blocGame from '../public/images/works/bloc_game.png'
import animated from '../public/images/works/animated.png'





const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        {/* 
        <Section delay={0.3}>
          <WorkGridItem
            id="awesome_latam"
            thumbnail={thumbAwesomeLatam}
            title="Gophers LATAM"
          >
            Comunidad de programadores Golang en Español-Latino.
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
            id="notepad" thumbnail={notepad} title="NotePad">
            👾  Notes app, using markdown to create them 💙         
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem
            id="bloc_game" thumbnail={blocGame} title="BloC Game API">
            👾  👻 Using the bloc state handler, in a flutter app consuming a video game api 💙 
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem
            id="animated_todo" thumbnail={animated} title="Animated Todo">
            How to build a smoothly animated ToDo app with React Native, Expo, Reanimated, NativeBase, and Moti
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem
            id="sunny_desk" thumbnail={sunnyDesk} title="SunnyDesk">
            Compose for Desktop: Get Your Weather!.
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem
            id="weather_app" thumbnail={thumbWeather} title="Weather App UI">
            Flutter weather app UI 🚀.
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem id="webcoffe" thumbnail={thumbStyly} title="Web Coffe">
            Flutter web app for coffee shop ☕.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
