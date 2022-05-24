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
    <Layout title="BloC Game Api">
        <Container>
            <Title>Jetpack Compose E-commerce<Badge>2021</Badge>
            </Title>
            <P> Jetpack Compose E-commerce 🛒 </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Mobile, Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Kotlin, Navigation, E-commerce</span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/manuelduarte077/jetpack_compose_e-commerce">
                        Jetpack Compose E-commerce 🛒 <ExternalLinkIcon mx="2px" />
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
