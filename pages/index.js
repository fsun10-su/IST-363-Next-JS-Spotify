import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


import Layout from "../components/Layout"
import Button from '../components/Button'
import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import TracksByGenre from '../components/TracksByGenre'
import Heading from '../components/Heading'
import Paragraph from "../components/Paragraph"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content='This is a summary of my website' />
      </Head>

      <section>
        <Container>
          <Row>
            <Col sm="6" md="4" lg="3">Col 1</Col>
            <Col sm="6" md="4" lg="3">Col 2</Col>
            <Col sm="6" md="4" lg="3">Col 3</Col>
            <Col sm="6" md="4" lg="3">Col 4</Col>
          </Row>
        </Container>
      </section>
      <TracksByGenre />

    </Layout>
  )
}
