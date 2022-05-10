import Col from "../../components/Col";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import Paragraph from "../../components/Paragraph";

import Image from "next/image";

import { getAlbums } from "../../lib/api";
import Link from "next/link";

export async function getStaticProps() {
    const albums = await getAlbums();
    return {
        props: {
            albums
        }
    }
}

const AlbumsPage = ({ albums }) => {
    return <Layout>
        <Container>
            <Heading level="1">Albums</Heading>
            <Row>
            {albums.map((album, index) => {
                const { featuredImage, title, slug } = album.node;
                const { sourceUrl,altText, mediaDetails } = featuredImage.node;
                return <Col xs="6" sm="4" key={index} marginBottom="2">

                    <Image 
                        src={sourceUrl}
                        alt={altText}
                        width={mediaDetails.width}
                        height={mediaDetails.height}
                    />
                    <Heading level="3">{title}</Heading>
                    <Paragraph><Link href={`/albums/${slug}`}><a>Read More</a></Link></Paragraph>
                </Col>
            })}
            </Row>
        </Container>
    </Layout>
}
export default AlbumsPage;