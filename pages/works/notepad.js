import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon, PhoneIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { TitlePlatform } from '../../components/platforms'

const Work = () => (
    <Layout title="NotePad">
        <Container>
            <Title>
                NotePad <Badge>2022</Badge>
            </Title>
            <P>✨ NotePad 🚀</P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Mobile, Android, IOS</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Dart(Flutter), Firebase, SQLife, Markdown</span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/manuelduarte077/notepad">
                        NotePad 🚀 <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <TitlePlatform>
             IOS  <PhoneIcon /> 
            </TitlePlatform>

            <SimpleGrid columns={2} gap={2}>
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/notepad/main/assets/screens/1.png"
                    alt="notepad"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/notepad/main/assets/screens/3.png"
                    alt="notepad_01"
                />
            </SimpleGrid>

            <SimpleGrid columns={2} gap={2}>
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/notepad/main/assets/screens/2.png"
                    alt="notepad"
                />
            </SimpleGrid>

            <TitlePlatform>
                Android
            </TitlePlatform>

            <SimpleGrid columns={2} gap={2}>
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/notepad/main/assets/screens/1.1.png"
                    alt="weather_01"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/notepad/main/assets/screens/1.2.png"
                    alt="weather_01"
                />
            </SimpleGrid>

            <SimpleGrid columns={2} gap={2}>
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/notepad/main/assets/screens/1.3.png"
                    alt="weather_01"
                />

            </SimpleGrid>

        </Container>
    </Layout>
)

export default Work
