import Layout from "../../components/Layout"
import Heading from "../../components/Heading"
import Image from "next/image"
import Paragraph from "../../components/Paragraph"
import Section from "../../components/Section"

import { getAllArtistSlugs, getSingleArtistData } from '../../lib/api'
import Row from "../../components/Row";
import Col from "../../components/Col";
import Link from "next/link";
import Container from "../../components/Container"

//WATERFALL
// 1. getStaticPaths
export async function getStaticPaths() {
    const paths = await getAllArtistSlugs();
    return {
        paths,
        fallback: false
    }
}

// 2. getStaticProps
export async function getStaticProps({ params }) {
    const artistData = await getSingleArtistData(params.id);
    return {
        props: {
            artistData
        }
    }
}

const SingleArtistPage = ({ artistData }) => {
    const { title,content, featuredImage, artistInformation } = artistData;
    const { sourceUrl, altText, mediaDetails } = featuredImage.node;
    const { artistsToAlbums } =artistInformation
    return <Layout>
        <Container>
            <Row>
                <Col xs="12" md="3">        
                <Image 
                    src ={sourceUrl}
                    alt = {altText}
                    width = {mediaDetails.width}
                    height = {mediaDetails.height}
                />
                </Col>
                <Col xs="12" md="9" justifyContent="center">
                    <Heading level="1">{title}</Heading>
                    {/*<Paragraph intro>
                        {content}
                    </Paragraph>*/}
                </Col>
            </Row>


        {artistsToAlbums &&
        <Section>
            <Heading level="2">Albums</Heading>
            <Row>
            {artistsToAlbums.map((album) => {
                const { title, slug, featuredImage } = album
                const { sourceUrl, altText, mediaDetails } = featuredImage.node;
                return <Col xs="6" sm="4" md="3">
                    <Link href={`/albums/${slug}`}>
                        <a>
                            <Image 
                            src ={sourceUrl}
                            alt = {altText}
                            width = {mediaDetails.width}
                            height = {mediaDetails.height}        
                            />
                        </a>
                    </Link>
                    <Heading level="3">{title}</Heading>
                </Col>
            })}
            </Row>

        </Section>
        }
        <Paragraph>
            <Link href="/artists">
                <a>
                    Back to artists
                </a>
            </Link>
        </Paragraph>
        </Container>
    </Layout>
}

export default SingleArtistPage