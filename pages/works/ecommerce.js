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
import { TitlePlatform } from '../../components/platforms'

const Work = () => (
    <Layout title="E-commerce">
        <Container>
            <Title>
                E-commerce <Badge>2022</Badge>
            </Title>
            <P>✨ E-commerce 🛒</P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Mobile, Android, IOS</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Dart(Flutter), Firebase, BLoC</span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/manuelduarte077/notepad">
                        E-commerce 🛒 <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <TitlePlatform>Home</TitlePlatform>

            <SimpleGrid columns={3} gap={3}>
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/home.png"
                    alt="weather"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/cart.png"
                    alt="weather_01"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/wishlist_1.png"
                    alt="weather_01"
                />
            </SimpleGrid>

            <TitlePlatform>Products by category</TitlePlatform>

            <SimpleGrid columns={3} gap={2}>
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/category_1.png"
                    alt="weather_01"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/category_2.png"
                    alt="weather_01"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/category_3.png"
                    alt="weather_01"
                />
            </SimpleGrid>

            <TitlePlatform>Products Detail</TitlePlatform>

            <SimpleGrid columns={3} gap={2}>
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/product_1.png"
                    alt="weather_01"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/product_2.png"
                    alt="weather_01"
                />
                <WorkImage
                    src="https://raw.githubusercontent.com/manuelduarte077/ecommerce/main/assets/screenshot/product_3.png"
                    alt="weather_01"
                />
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Work
